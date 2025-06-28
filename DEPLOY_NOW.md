# 🚀 立即部署到 Vercel - 最简单的方法

## 一键部署（最快）

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fssql2014%2Fmcp-eda-hub&project-name=mcp-eda-auth&root-directory=nextjs-app&env=DATABASE_URL,NEXTAUTH_URL,NEXTAUTH_SECRET&envDescription=Required%20environment%20variables&envLink=https%3A%2F%2Fgithub.com%2Fssql2014%2Fmcp-eda-hub)

点击上面的按钮，然后：
1. 登录 Vercel
2. 填写环境变量（见下方）
3. 点击 Deploy

## 环境变量值

复制粘贴以下值：

**DATABASE_URL:**
```
postgresql://postgres.qoytiztonbhxfwujvanq:Hexsyh-behpe3-jaqbuf@aws-0-us-east-2.pooler.supabase.com:6543/postgres?pgbouncer=true
```

**NEXTAUTH_URL:**
```
https://www.mcp4eda.cn
```

**NEXTAUTH_SECRET:**
```
RDYwr/hcphNVAUc4VxUgJjxQ7u7yOUrQj6HppaqGbcI=
```

## 手动部署步骤（5分钟）

### 1. 打开 Vercel
https://vercel.com/new

### 2. 导入项目
- 搜索: `mcp-eda-hub`
- 点击: Import

### 3. 配置
- **Project Name**: mcp-eda-auth
- **Root Directory**: 点击 Edit，输入 `nextjs-app`
- **Framework**: Next.js (自动)

### 4. 环境变量
展开 "Environment Variables"，添加上面的三个变量

### 5. Deploy
点击 Deploy 按钮

## 配置域名（部署后）

### 在 Vercel 中：
1. 进入项目
2. Settings → Domains
3. 添加 `www.mcp4eda.cn`

### 在域名服务商：
修改 DNS 记录：
- 类型: CNAME
- 主机: www
- 值: cname.vercel-dns.com

## 测试

部署完成后访问：
- https://www.mcp4eda.cn
- https://www.mcp4eda.cn/register
- https://www.mcp4eda.cn/login

## 完成！✅