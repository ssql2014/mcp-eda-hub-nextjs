# Claude Code GitHub Action Setup Guide

## Overview
Claude Code Action enables AI-powered code reviews, PR summaries, and commit message generation in your GitHub workflows.

## Installation Complete ✅

I've created three workflow files for different use cases:

### 1. Code Review (`.github/workflows/claude-code-review.yml`)
- Triggers on pull requests
- Can be manually triggered with `/claude review` comment
- Reviews code changes and provides feedback

### 2. PR Summary (`.github/workflows/claude-pr-summary.yml`)
- Automatically generates PR summaries
- Helps reviewers understand changes quickly

### 3. Commit Message Generator (`.github/workflows/claude-commit-message.yml`)
- Generates conventional commit messages
- Useful for maintaining consistent commit history

## Setup Steps

### 1. Add Anthropic API Key to GitHub Secrets

1. Go to your repository on GitHub
2. Navigate to Settings → Secrets and variables → Actions
3. Click "New repository secret"
4. Add:
   - Name: `ANTHROPIC_API_KEY`
   - Value: Your Anthropic API key

### 2. Get an Anthropic API Key

If you don't have one:
1. Visit https://console.anthropic.com
2. Sign up or log in
3. Go to API Keys section
4. Create a new API key

### 3. Enable GitHub Actions

1. Go to Settings → Actions → General
2. Ensure Actions are enabled
3. Set workflow permissions to "Read and write permissions"

## Usage

### Automatic Code Review
- Opens automatically on new PRs
- Updates when PR is updated

### Manual Code Review
Comment on any PR with:
```
/claude review
```

### PR Summary
- Automatically generates when PR is opened or updated

### Commit Message Generation
- Triggers on pushes to feature/* and fix/* branches
- Can be manually triggered from Actions tab

## Customization

### Change Model
Update the `model` parameter in workflow files:
```yaml
model: claude-3-5-sonnet-20241022  # Latest
# or
model: claude-3-opus-20240229       # Most capable
# or  
model: claude-3-haiku-20240307      # Fastest
```

### Customize Prompts
Edit the `review-prompt`, `summary-prompt`, or `commit-prompt` in the workflow files.

### File Filtering
Adjust `include-patterns` and `exclude-patterns` to control which files are reviewed.

## Advanced Configuration

### Environment-Specific Reviews
```yaml
- name: Claude Code Review
  uses: anthropics/claude-code-action@v1
  with:
    anthropic-api-key: ${{ secrets.ANTHROPIC_API_KEY }}
    environment-context: |
      - Production environment
      - Next.js application
      - PostgreSQL database
      - Authentication with NextAuth.js
```

### Custom Review Categories
```yaml
review-categories:
  - security
  - performance
  - accessibility
  - testing
  - documentation
```

### Different Workflows for Different File Types
Create separate workflows for frontend/backend:
```yaml
# .github/workflows/claude-frontend-review.yml
include-patterns: |
  **/*.jsx
  **/*.tsx
  **/*.css

# .github/workflows/claude-backend-review.yml  
include-patterns: |
  **/*.py
  **/*.go
  **/*.sql
```

## Troubleshooting

### Action Fails with API Key Error
- Ensure `ANTHROPIC_API_KEY` is set in repository secrets
- Check the key is valid and has sufficient credits

### No Review Comments Appear
- Check Actions tab for workflow runs
- Ensure proper permissions are set
- Verify file patterns match your code

### Rate Limiting
- Claude API has rate limits
- Consider using different models for different purposes
- Implement review filtering for large PRs

## Best Practices

1. **Start Small**: Begin with PR summaries before enabling full code reviews
2. **Customize Prompts**: Tailor prompts to your team's standards
3. **Filter Files**: Review only relevant files to save API costs
4. **Use Comments**: Team members can request reviews with `/claude review`
5. **Monitor Usage**: Track API usage in Anthropic console

## Cost Optimization

- Use `claude-3-haiku` for simple tasks
- Limit `max-files` to reduce tokens
- Exclude test files and generated code
- Use manual triggers for large PRs

## Security Notes

- Never commit API keys
- Use GitHub Secrets for sensitive data
- Review generated suggestions before applying
- Set appropriate repository permissions

## Example PR Review Output

```markdown
## Claude Code Review 🤖

### Summary
This PR implements user authentication with NextAuth.js and PostgreSQL.

### Strengths ✅
- Clean separation of concerns
- Proper error handling
- Type safety with TypeScript

### Suggestions 💡
1. Consider adding rate limiting to login endpoint
2. Add unit tests for auth utilities
3. Document environment variables in README

### Security Considerations 🔒
- Passwords are properly hashed with bcrypt
- Session tokens use secure defaults
- Consider adding CSRF protection
```

## Next Steps

1. Commit and push these workflow files
2. Add your API key to GitHub Secrets
3. Create a test PR to see it in action
4. Customize based on your team's needs

Happy coding with Claude! 🚀