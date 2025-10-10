import * as http from 'http';

// Define the port on which the server will listen
const PORT = process.env.PORT || 3000;

// Create the HTTP server
const server = http.createServer((req, res) => {
  // Check if the request is a GET request to the root path '/'
  if (req.method === 'GET' && req.url === '/') {
    // Set the response header with status code 200 and content type
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    // Send the "Hello World" response
    res.end('Hello World\n');
  } else {
    // For any other request, return a 404 Not Found
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found\n');
  }
});

// Start the server and listen on the specified port
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
