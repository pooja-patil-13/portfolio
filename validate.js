const fs = require("fs");

const html = fs.readFileSync("index.html", "utf8");
const css = fs.readFileSync("styles.css", "utf8");
const script = fs.readFileSync("script.js", "utf8");

if (!html.includes("<main") || !html.includes("</html>")) throw new Error("Invalid HTML structure");
if (!css.includes("@media (max-width: 760px)")) throw new Error("Responsive CSS is missing");
if (!script.includes("getElementById(\"year\")")) throw new Error("JavaScript validation failed");

console.log("Portfolio source validation passed");
