const fs = require("fs");
const path = require("path");

const fileName = process.argv[2];
if (!fileName) throw Error("Give me a filename as an arg!");

const data = fs.readFileSync(fileName, "utf8");

const noWhitespaceData = data.replace(/[^\S ]\s*|\s{2,}/g, "");

fs.writeFileSync(fileName, noWhitespaceData);
