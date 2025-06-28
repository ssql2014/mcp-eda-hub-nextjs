# Gemini CLI Usage Guide

## Installation Status
✅ Gemini CLI v0.1.7 is now installed globally

## Basic Usage

### 1. Simple prompt
```bash
gemini -p "What is the capital of France?"
```

### 2. Use with files
```bash
cat file.txt | gemini -p "Summarize this content"
```

### 3. Interactive mode
```bash
gemini
```

### 4. Choose different models
```bash
# Default is gemini-2.5-pro
gemini -m gemini-2.5-flash -p "Your prompt"
```

## Available Models
- `gemini-2.5-pro` (default)
- `gemini-2.5-flash`
- `gemini-2.0-flash`
- `gemini-1.5-pro`
- `gemini-1.5-flash`

## Common Options
- `-p, --prompt`: Your prompt text
- `-m, --model`: Choose model (default: gemini-2.5-pro)
- `-d, --debug`: Enable debug mode
- `-a, --all_files`: Include all files in context
- `-y, --yolo`: Auto-accept all actions (be careful!)
- `-s, --sandbox`: Run in sandbox mode

## Examples

### Analyze code
```bash
cat script.py | gemini -p "Explain what this code does"
```

### Generate code
```bash
gemini -p "Write a Python function to calculate fibonacci numbers"
```

### Debug assistance
```bash
cat error.log | gemini -p "Help me debug this error"
```

### With context from multiple files
```bash
gemini -a -p "Review these files and suggest improvements"
```

## API Key Setup (if needed)
If you haven't set up your API key:
```bash
export GOOGLE_API_KEY="your-api-key-here"
```

Or add to your shell profile:
```bash
echo 'export GOOGLE_API_KEY="your-api-key-here"' >> ~/.zshrc
```

## Troubleshooting
- If you get API key errors, make sure `GOOGLE_API_KEY` is set
- For permission errors, try with `sudo npm install -g @google/gemini-cli`
- Check version: `gemini --version`