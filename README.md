# KSON

KSON is a minimalist, array-based programming language where brackets [...] act as literal code blocks. No boilerplate, no unneeded safety nets—just raw indexing and control flow.

It is **Turing-complete**, satisfying the core requirements of a Counter Machine with just 5 fundamental commands.

## 🚀 Execution
Run your `.kson` file using Node.js:
```bash
node kson.js example.kson
```

## 📋 Syntax & Examples

### Print to Console (`log`)
```json
["log", "Hello, World!"]
```

### Variable Assignment (`set`)
```json
["set", "score", 100]
```

### Increment (`+`)
```json
["+", "score"]
```

### Decrement (`-`)
```json
["-", "score"]
```

### Loop Statement (`while`)
```json
[
  ["set", "i", 5],
  ["while", "i", 0, ["-", "i"]]
]
```