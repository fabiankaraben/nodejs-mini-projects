import * as http from 'http';
import * as fs from 'fs';
import * as path from 'path';
import * as url from 'url';

// Define the port the server will listen on
const PORT = process.env.PORT || 3000;

// Define the directory where static files are stored
const PUBLIC_DIR = path.join(__dirname, '..', 'public');

// MIME types for common file extensions
const MIME_TYPES: { [key: string]: string } = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
};

// Create the HTTP server
const server = http.createServer((req, res) => {
  // Parse the request URL
  const parsedUrl = url.parse(req.url || '/');
  let pathname = parsedUrl.pathname || '/';

  // Default to index.html if root path is requested
  if (pathname === '/') {
    pathname = '/index.html';
  }

  // Construct the full file path
  const filePath = path.join(PUBLIC_DIR, pathname);

  // Check if the file exists
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      // File not found, send 404
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
      return;
    }

    // Get the file extension to determine MIME type
    const ext = path.extname(filePath);
    const mimeType = MIME_TYPES[ext] || 'application/octet-stream';

    // Read and serve the file
    fs.readFile(filePath, (err, data) => {
      if (err) {
        // Error reading file, send 500
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('500 Internal Server Error');
        return;
      }

      // Send the file with appropriate headers
      res.writeHead(200, { 'Content-Type': mimeType });
      res.end(data);
    });
  });
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log(`Serving static files from ${PUBLIC_DIR}`);
});
