#!/bin/bash

echo "🚀 Vercel 部署脚本"
echo "=================="
echo ""

# 检查目录
if [ ! -d "./nextjs-app" ]; then
    echo "❌ 错误: 找不到 nextjs-app 目录"
    exit 1
fi

cd nextjs-app

# 创建环境变量文件
echo "📝 创建环境变量文件..."
cat > .env.local << 'EOF'
DATABASE_URL=postgresql://postgres.qoytiztonbhxfwujvanq:Hexsyh-behpe3-jaqbuf@aws-0-us-east-2.pooler.supabase.com:6543/postgres?pgbouncer=true
NEXTAUTH_URL=https://www.mcp4eda.cn
NEXTAUTH_SECRET=RDYwr/hcphNVAUc4VxUgJjxQ7u7yOUrQj6HppaqGbcI=
EOF

# 创建 vercel.json
echo "📝 创建 Vercel 配置..."
cat > vercel.json << 'EOF'
{
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "devCommand": "npm run dev"
}
EOF

echo ""
echo "✅ 配置文件已创建"
echo ""
echo "📌 现在请执行以下步骤："
echo ""
echo "1. 运行部署命令："
echo "   npx vercel --prod"
echo ""
echo "2. 首次部署时会提示："
echo "   - Set up and deploy? 选择 Y"
echo "   - Which scope? 选择您的用户名"
echo "   - Link to existing project? 选择 N"
echo "   - Project name? 输入: mcp-eda-auth"
echo "   - In which directory? 按回车（使用当前目录）"
echo "   - Override settings? 选择 N"
echo ""
echo "3. 部署完成后，进入 Vercel Dashboard："
echo "   - 添加自定义域名 www.mcp4eda.cn"
echo "   - 修改 DNS 指向 Vercel"
echo ""
echo "准备好了吗？现在运行："
echo "cd nextjs-app && npx vercel --prod"