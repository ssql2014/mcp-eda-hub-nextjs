import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import nodemailer from 'nodemailer'

const prisma = new PrismaClient()

// Create email transporter
const createTransporter = () => {
  // Using Gmail as example - you can configure any SMTP service
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS // Use app-specific password for Gmail
    }
  })
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, description, githubUrl, category, tags, author, email } = body

    // Validate required fields
    if (!name || !description || !githubUrl || !category || !author || !email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Save to database
    const submission = await prisma.submission.create({
      data: {
        name,
        description,
        githubUrl,
        category,
        tags: tags ? tags.split(',').map((t: string) => t.trim()) : [],
        author,
        email,
        status: 'pending'
      }
    })

    // Send email notification
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      const transporter = createTransporter()
      
      // Email to admin (you)
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: 'ssql2014@gmail.com',
        subject: `New MCP Server Submission: ${name}`,
        html: `
          <h2>New MCP Server Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Author:</strong> ${author} (${email})</p>
          <p><strong>Category:</strong> ${category}</p>
          <p><strong>Description:</strong> ${description}</p>
          <p><strong>GitHub URL:</strong> <a href="${githubUrl}">${githubUrl}</a></p>
          <p><strong>Tags:</strong> ${tags}</p>
          <p><strong>Submission ID:</strong> ${submission.id}</p>
          <hr>
          <p>View all submissions at: <a href="${process.env.NEXT_PUBLIC_URL}/admin/submissions">${process.env.NEXT_PUBLIC_URL}/admin/submissions</a></p>
        `
      })

      // Confirmation email to submitter
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'MCP Server Submission Received',
        html: `
          <h2>Thank you for your submission!</h2>
          <p>We have received your MCP server submission: <strong>${name}</strong></p>
          <p>Our team will review it and get back to you soon.</p>
          <p>If you have any questions, please reply to this email.</p>
          <br>
          <p>Best regards,<br>MCP EDA Hub Team</p>
        `
      })
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Submission received successfully',
      id: submission.id 
    })
  } catch (error) {
    console.error('Submission error:', error)
    return NextResponse.json(
      { error: 'Failed to process submission' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    // Optional: Add authentication check here
    const submissions = await prisma.submission.findMany({
      orderBy: { createdAt: 'desc' }
    })
    
    return NextResponse.json(submissions)
  } catch (error) {
    console.error('Error fetching submissions:', error)
    return NextResponse.json(
      { error: 'Failed to fetch submissions' },
      { status: 500 }
    )
  }
}