# Vercel 部署完整指南

## 当前状态
- ✅ Next.js 应用代码已准备好
- ✅ 环境变量已配置
- ✅ 域名 www.mcp4eda.cn 存在（当前指向 GitHub Pages）
- ⚠️ 需要部署到 Vercel 并更改 DNS

## 快速部署步骤

### 选项 1：使用 Vercel 网页界面（推荐）

1. **访问 Vercel 导入页面**
   - 打开: https://vercel.com/new
   - 登录您的 Vercel 账号

2. **导入 GitHub 仓库**
   - 搜索: `mcp-eda-hub`
   - 选择: `ssql2014/mcp-eda-hub`

3. **配置项目**
   - Project Name: `mcp-eda-auth`
   - Framework Preset: Next.js（自动检测）
   - Root Directory: `nextjs-app`
   - Node.js Version: 18.x

4. **添加环境变量**
   点击 "Environment Variables" 展开，添加以下三个变量：

   **DATABASE_URL**
   ```
   postgresql://postgres.qoytiztonbhxfwujvanq:Hexsyh-behpe3-jaqbuf@aws-0-us-east-2.pooler.supabase.com:6543/postgres?pgbouncer=true
   ```

   **NEXTAUTH_URL**
   ```
   https://www.mcp4eda.cn
   ```

   **NEXTAUTH_SECRET**
   ```
   RDYwr/hcphNVAUc4VxUgJjxQ7u7yOUrQj6HppaqGbcI=
   ```

5. **点击 Deploy 按钮**

### 选项 2：使用 Vercel CLI

```bash
# 1. 进入项目目录
cd nextjs-app

# 2. 安装 Vercel CLI（如果还没有）
npm i -g vercel

# 3. 登录 Vercel
vercel login

# 4. 部署（会有交互式提示）
vercel --prod

# 部署时的选项：
# - Set up and deploy: Y
# - Which scope: 选择您的账号
# - Link to existing project? N
# - Project name: mcp-eda-auth
# - In which directory: ./
# - Override settings? N
```

## 配置自定义域名

### 1. 在 Vercel 中添加域名
1. 访问: https://vercel.com/dashboard
2. 找到项目: `mcp-eda-auth`
3. 点击项目进入
4. 转到: Settings → Domains
5. 添加域名: `www.mcp4eda.cn`
6. Vercel 会提示您需要配置 DNS

### 2. 更改 DNS 记录
1. 登录您的域名服务商管理面板
2. 找到 DNS 管理
3. 修改或添加记录：
   ```
   类型: CNAME
   主机: www
   值: cname.vercel-dns.com
   TTL: 自动或 600
   ```
4. 删除指向 GitHub Pages 的旧记录

### 3. 等待 DNS 生效
- 通常需要 5-30 分钟
- 最长可能需要 48 小时
- 可以使用 `nslookup www.mcp4eda.cn` 检查

## 测试部署

### 1. 访问临时 URL
首次部署后，Vercel 会提供一个临时 URL：
- 格式: `https://mcp-eda-auth-xxx.vercel.app`
- 用这个 URL 测试功能

### 2. 测试功能
- 注册页面: `/register`
- 登录页面: `/login`
- 主页: `/`

### 3. DNS 生效后测试
- https://www.mcp4eda.cn
- https://www.mcp4eda.cn/register
- https://www.mcp4eda.cn/login

## 故障排除

### 如果部署失败
1. 检查 build 日志
2. 确认环境变量设置正确
3. 确认 Root Directory 是 `nextjs-app`

### 如果无法访问
1. 检查 DNS 是否已更改
2. 清除浏览器缓存
3. 使用隐私模式测试

### 如果登录/注册失败
1. 检查数据库连接
2. 查看 Vercel Functions 日志
3. 确认环境变量正确

## 后续步骤

1. **监控部署**
   - Vercel Dashboard 查看访问统计
   - Functions 标签查看 API 日志

2. **优化性能**
   - 启用 Vercel Analytics
   - 配置缓存策略

3. **安全加固**
   - 定期更新 NEXTAUTH_SECRET
   - 配置 CORS 策略
   - 添加速率限制

## 需要帮助？

- Vercel 文档: https://vercel.com/docs
- Next.js 文档: https://nextjs.org/docs
- NextAuth 文档: https://next-auth.js.org/