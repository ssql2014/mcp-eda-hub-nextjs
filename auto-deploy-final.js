#!/usr/bin/env node

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const readline = require('readline');

// 配置
const CONFIG = {
  email: process.env.VERCEL_EMAIL || '',
  password: process.env.VERCEL_PASSWORD || '',
  githubRepo: 'ssql2014/mcp-eda-hub',
  projectName: 'mcp-eda-auth',
  rootDirectory: 'nextjs-app',
  customDomain: 'www.mcp4eda.cn',
  envVars: {
    DATABASE_URL: 'postgresql://postgres.qoytiztonbhxfwujvanq:Hexsyh-behpe3-jaqbuf@aws-0-us-east-2.pooler.supabase.com:6543/postgres?pgbouncer=true',
    NEXTAUTH_URL: 'https://www.mcp4eda.cn',
    NEXTAUTH_SECRET: 'RDYwr/hcphNVAUc4VxUgJjxQ7u7yOUrQj6HppaqGbcI='
  }
};

// 创建 readline 接口用于用户输入
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

async function deployToVercel() {
  console.log('🚀 Vercel 自动部署脚本\n');
  
  // 检查是否有登录凭据
  if (!CONFIG.email || !CONFIG.password) {
    console.log('需要 Vercel 登录信息：');
    console.log('1. 设置环境变量:');
    console.log('   export VERCEL_EMAIL="your-email"');
    console.log('   export VERCEL_PASSWORD="your-password"');
    console.log('\n或者继续使用交互式登录...\n');
  }
  
  const browser = await puppeteer.launch({ 
    headless: false,
    defaultViewport: null,
    args: ['--start-maximized']
  });
  
  const page = await browser.newPage();
  
  try {
    // 1. 访问 Vercel
    console.log('📍 步骤 1: 访问 Vercel...');
    await page.goto('https://vercel.com/new', { waitUntil: 'networkidle2' });
    await page.waitForTimeout(3000);
    
    // 2. 检查是否需要登录
    const needsLogin = await page.$('input[type="email"], a[href*="login"]') !== null;
    
    if (needsLogin) {
      console.log('📍 步骤 2: 需要登录...');
      
      // 如果有登录链接，点击它
      const loginLink = await page.$('a[href*="login"]');
      if (loginLink) {
        await loginLink.click();
        await page.waitForTimeout(2000);
      }
      
      // 尝试使用 GitHub 登录（更简单）
      const githubButton = await page.$('button:has-text("Continue with GitHub"), a:has-text("Continue with GitHub")');
      if (githubButton) {
        console.log('   使用 GitHub 登录...');
        await githubButton.click();
        
        console.log('\n⏸️  请在浏览器中完成 GitHub 授权');
        console.log('   完成后按 Enter 继续...');
        await question('');
        
        // 等待登录完成
        await page.waitForNavigation({ waitUntil: 'networkidle2' });
      } else if (CONFIG.email && CONFIG.password) {
        // 使用邮箱密码登录
        console.log('   使用邮箱登录...');
        await page.type('input[type="email"]', CONFIG.email);
        await page.type('input[type="password"]', CONFIG.password);
        await page.click('button[type="submit"]');
        await page.waitForNavigation({ waitUntil: 'networkidle2' });
      } else {
        console.log('\n⏸️  请在浏览器中手动登录');
        console.log('   完成后按 Enter 继续...');
        await question('');
      }
    }
    
    // 3. 导航到新建项目页面
    console.log('\n📍 步骤 3: 导航到导入页面...');
    const currentUrl = page.url();
    if (!currentUrl.includes('/new')) {
      await page.goto('https://vercel.com/new', { waitUntil: 'networkidle2' });
      await page.waitForTimeout(3000);
    }
    
    // 4. 搜索仓库
    console.log('📍 步骤 4: 搜索 GitHub 仓库...');
    
    // 尝试多个可能的搜索框选择器
    const searchSelectors = [
      'input[type="search"]',
      'input[placeholder*="Search"]',
      'input[placeholder*="search"]',
      'input[aria-label*="Search"]'
    ];
    
    let searchInput = null;
    for (const selector of searchSelectors) {
      searchInput = await page.$(selector);
      if (searchInput) break;
    }
    
    if (searchInput) {
      await searchInput.click();
      await searchInput.type('mcp-eda-hub');
      await page.waitForTimeout(2000);
    } else {
      console.log('⚠️  找不到搜索框，请手动搜索 mcp-eda-hub');
      await question('找到仓库后按 Enter 继续...');
    }
    
    // 5. 选择仓库
    console.log('📍 步骤 5: 选择仓库...');
    
    // 尝试点击仓库
    const repoSelectors = [
      `a[href*="${CONFIG.githubRepo}"]`,
      `div:has-text("${CONFIG.githubRepo}")`,
      `button:has-text("Import")`
    ];
    
    let clicked = false;
    for (const selector of repoSelectors) {
      const element = await page.$(selector);
      if (element) {
        await element.click();
        clicked = true;
        break;
      }
    }
    
    if (!clicked) {
      console.log('⚠️  请手动点击 ssql2014/mcp-eda-hub 仓库');
      await question('点击后按 Enter 继续...');
    }
    
    await page.waitForTimeout(3000);
    
    // 6. 配置项目
    console.log('\n📍 步骤 6: 配置项目设置...');
    
    // 项目名称
    const projectNameInput = await page.$('input[name="projectName"], input[placeholder*="Project"]');
    if (projectNameInput) {
      await projectNameInput.click({ clickCount: 3 });
      await projectNameInput.type(CONFIG.projectName);
      console.log('   ✅ 设置项目名称: mcp-eda-auth');
    }
    
    // Root Directory
    console.log('   ⚠️  请手动设置 Root Directory 为: nextjs-app');
    console.log('   （点击 Edit 按钮，输入 nextjs-app）');
    
    // 7. 环境变量
    console.log('\n📍 步骤 7: 添加环境变量...');
    console.log('   请手动添加以下环境变量：\n');
    
    for (const [key, value] of Object.entries(CONFIG.envVars)) {
      console.log(`   ${key}:`);
      console.log(`   ${value}\n`);
    }
    
    console.log('⏸️  添加完环境变量后按 Enter 继续...');
    await question('');
    
    // 8. 部署
    console.log('\n📍 步骤 8: 准备部署...');
    console.log('   请检查所有配置，然后点击 Deploy 按钮');
    console.log('\n⏸️  点击 Deploy 后按 Enter 继续...');
    await question('');
    
    // 9. 等待部署完成
    console.log('\n⏳ 等待部署完成...');
    
    // 等待出现部署 URL
    try {
      await page.waitForSelector('a[href*=".vercel.app"]', { timeout: 300000 });
      const deploymentUrl = await page.$eval('a[href*=".vercel.app"]', el => el.href);
      
      console.log('\n✅ 部署成功！');
      console.log(`🔗 部署 URL: ${deploymentUrl}`);
      
      // 保存部署信息
      const deploymentInfo = {
        url: deploymentUrl,
        projectName: CONFIG.projectName,
        customDomain: CONFIG.customDomain,
        timestamp: new Date().toISOString(),
        nextSteps: [
          '1. 在 Vercel 项目设置中添加自定义域名 www.mcp4eda.cn',
          '2. 修改 DNS CNAME 记录指向 cname.vercel-dns.com',
          '3. 等待 DNS 生效',
          '4. 测试 https://www.mcp4eda.cn'
        ]
      };
      
      fs.writeFileSync(
        path.join(__dirname, 'deployment-success.json'),
        JSON.stringify(deploymentInfo, null, 2)
      );
      
      console.log('\n📄 部署信息已保存到 deployment-success.json');
    } catch (error) {
      console.log('\n⚠️  部署可能还在进行中...');
    }
    
    // 10. 配置域名提示
    console.log('\n📌 下一步 - 配置自定义域名:');
    console.log('1. 在当前页面找到 "Domains" 或进入项目设置');
    console.log('2. 添加域名: www.mcp4eda.cn');
    console.log('3. 在域名服务商处修改 DNS:');
    console.log('   类型: CNAME');
    console.log('   主机: www');
    console.log('   值: cname.vercel-dns.com');
    
  } catch (error) {
    console.error('\n❌ 错误:', error.message);
    
    // 保存截图用于调试
    await page.screenshot({ path: 'error-screenshot.png', fullPage: true });
    console.log('📸 错误截图已保存: error-screenshot.png');
  }
  
  console.log('\n按 Ctrl+C 退出...');
  rl.close();
}

// 运行
deployToVercel().catch(console.error);