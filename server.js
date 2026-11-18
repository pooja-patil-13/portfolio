const http = require("http");
const fs = require("fs");
const path = require("path");

const root = __dirname;
const port = Number(process.env.PORT || 4173);
const types = { ".html": "text/html", ".css": "text/css", ".js": "text/javascript" };

http.createServer((request, response) => {
  const pathname = request.url === "/" ? "/index.html" : request.url;
  const file = path.join(root, path.normalize(pathname).replace(/^[/\\]+/, ""));
  if (!file.startsWith(root) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) {
    response.writeHead(404);
    response.end("Not found");
    return;
  }
  response.writeHead(200, { "Content-Type": types[path.extname(file)] || "application/octet-stream" });
  fs.createReadStream(file).pipe(response);
}).listen(port, "0.0.0.0", () => console.log(`Portfolio running at http://localhost:${port}`));
