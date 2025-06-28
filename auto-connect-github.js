#!/usr/bin/env node

const puppeteer = require('puppeteer');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

async function connectGitHubToVercel() {
  console.log('Starting automated GitHub connection to Vercel...\n');
  
  // Get user credentials
  const email = await question('Enter your Vercel email: ');
  const password = await question('Enter your Vercel password: ');
  
  const browser = await puppeteer.launch({
    headless: false, // Set to true for headless mode
    defaultViewport: { width: 1280, height: 800 }
  });
  
  try {
    const page = await browser.newPage();
    
    // Step 1: Login to Vercel
    console.log('\n1. Logging into Vercel...');
    await page.goto('https://vercel.com/login', { waitUntil: 'networkidle2' });
    
    // Try email/password login
    await page.waitForSelector('input[name="email"], input[type="email"]', { timeout: 5000 });
    await page.type('input[name="email"], input[type="email"]', email);
    
    // Click continue or find password field
    const continueButton = await page.$('button[type="submit"]');
    if (continueButton) {
      await continueButton.click();
      await page.waitForNavigation({ waitUntil: 'networkidle2' });
    }
    
    await page.waitForSelector('input[type="password"]', { timeout: 5000 });
    await page.type('input[type="password"]', password);
    
    // Submit login
    await page.keyboard.press('Enter');
    await page.waitForNavigation({ waitUntil: 'networkidle2' });
    
    console.log('✓ Logged in successfully');
    
    // Step 2: Navigate to project
    console.log('\n2. Navigating to project...');
    await page.goto('https://vercel.com/ssql2014s-projects/mcp-eda-hub-latest/settings/git', { 
      waitUntil: 'networkidle2' 
    });
    
    // Step 3: Connect Git repository
    console.log('\n3. Looking for Git connection button...');
    
    // Check if already connected
    const isConnected = await page.evaluate(() => {
      return document.body.innerText.includes('github.com');
    });
    
    if (isConnected) {
      console.log('✓ Git repository appears to be already connected!');
    } else {
      // Look for connect button
      const connectButton = await page.$('button:contains("Connect Git Repository"), button:contains("Connect"), a:contains("Connect Git")');
      
      if (connectButton) {
        await connectButton.click();
        await page.waitForTimeout(2000);
        
        // Select GitHub
        const githubOption = await page.$('button:contains("GitHub"), div:contains("GitHub")');
        if (githubOption) {
          await githubOption.click();
          await page.waitForTimeout(2000);
        }
        
        // Search for repository
        console.log('\n4. Searching for repository...');
        const searchInput = await page.$('input[type="search"], input[placeholder*="Search"]');
        if (searchInput) {
          await searchInput.type('mcp-eda-hub-nextjs');
          await page.waitForTimeout(2000);
          
          // Click import
          const importButton = await page.$('button:contains("Import"), button:contains("Connect")');
          if (importButton) {
            await importButton.click();
            console.log('✓ Repository connected successfully!');
          }
        }
      }
    }
    
    console.log('\n✅ Process completed!');
    console.log('\nYour project should now be connected to GitHub.');
    console.log('Future pushes to the main branch will automatically deploy.');
    
  } catch (error) {
    console.error('\n❌ Error:', error.message);
    console.log('\nPlease complete the connection manually at:');
    console.log('https://vercel.com/ssql2014s-projects/mcp-eda-hub-latest/settings/git');
  } finally {
    await browser.close();
    rl.close();
  }
}

// Run the automation
connectGitHubToVercel().catch(console.error);