# 🔧 修复环境变量错误

## 问题
环境变量显示了 `@database_url` 这样的引用，但密钥不存在。

## 解决方案

### 在 Vercel 部署界面：

1. **找到环境变量部分**
2. **删除所有 `@` 开头的值**
3. **直接粘贴以下实际值**：

### DATABASE_URL
删除 `@database_url`，替换为：
```
postgresql://postgres.qoytiztonbhxfwujvanq:Hexsyh-behpe3-jaqbuf@aws-0-us-east-2.pooler.supabase.com:6543/postgres?pgbouncer=true
```

### NEXTAUTH_URL
删除 `@nextauth_url`，替换为：
```
https://www.mcp4eda.cn
```

### NEXTAUTH_SECRET
删除 `@nextauth_secret`，替换为：
```
RDYwr/hcphNVAUc4VxUgJjxQ7u7yOUrQj6HppaqGbcI=
```

## 步骤说明

1. 在每个环境变量的值输入框中
2. 清空现有的 `@xxx` 引用
3. 粘贴上面的实际值
4. 确保没有多余的空格
5. 点击 Deploy

## 重要提示

- ❌ 不要使用 `@database_url` 格式
- ✅ 直接使用完整的连接字符串
- ❌ 不要创建 Secrets
- ✅ 直接在环境变量中输入值

## 如果已经部署

如果已经部署但失败了：
1. 进入项目 Settings
2. 找到 Environment Variables
3. 编辑每个变量，替换为实际值
4. 重新部署