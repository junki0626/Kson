const fs = require('fs');
const path = require('path');

const vars = {};

function run(code) {
    const cmd = code;

    if (cmd == "log") {
        console.log(vars[code] !== undefined ? vars[code] : code);
    }
    if (cmd == "set") {
        vars[code] = code;
    }
    if (cmd == "+") {
        if (vars[code] !== undefined) vars[code]++;
    }
    if (cmd == "-") {
        if (vars[code] !== undefined) vars[code]--;
    }
    if (cmd == "while") {
        while (vars[code] != code) {
            run(code);
        }
    }
}

const file = process.argv;
if (path.extname(file) !== '.kson') {
    console.error("Err : Only files with .kson extension are allowed.");
    process.exit(1);
}

const raw = fs.readFileSync(file, 'utf-8');
const code = JSON.parse(raw);
run(code);
