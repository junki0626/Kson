# KSON

## 🚀 Execution
Run your `.kson` file using Node.js:
```bash
node kson.js example.kson
```

## 📋 Syntax

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