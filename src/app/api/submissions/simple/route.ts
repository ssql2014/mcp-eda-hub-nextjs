import { NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

const DATA_FILE = path.join(process.cwd(), 'submissions.json')

// 确保文件存在
async function ensureFile() {
  try {
    await fs.access(DATA_FILE)
  } catch {
    await fs.writeFile(DATA_FILE, '[]', 'utf8')
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json()
    
    // 确保文件存在
    await ensureFile()
    
    // 读取现有数据
    const fileContent = await fs.readFile(DATA_FILE, 'utf8')
    const submissions = JSON.parse(fileContent || '[]')
    
    // 添加新提交
    const newSubmission = {
      id: Date.now().toString(),
      ...data,
      createdAt: new Date().toISOString()
    }
    
    submissions.push(newSubmission)
    
    // 保存到文件
    await fs.writeFile(DATA_FILE, JSON.stringify(submissions, null, 2), 'utf8')
    
    return NextResponse.json({ success: true, id: newSubmission.id })
  } catch (error) {
    console.error('Submission error:', error)
    return NextResponse.json({ error: 'Failed to save submission' }, { status: 500 })
  }
}

export async function GET() {
  try {
    await ensureFile()
    const fileContent = await fs.readFile(DATA_FILE, 'utf8')
    const submissions = JSON.parse(fileContent || '[]')
    
    return NextResponse.json(submissions)
  } catch (error) {
    console.error('Read error:', error)
    return NextResponse.json({ error: 'Failed to read submissions' }, { status: 500 })
  }
}