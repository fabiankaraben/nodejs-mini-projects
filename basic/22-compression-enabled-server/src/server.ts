import express from 'express';
import compression from 'compression';

// Create an Express application instance
const app = express();

// Enable compression middleware to automatically compress responses
// This reduces the size of responses, improving performance and bandwidth usage
app.use(compression());

// Define a route to serve a large text response
// This demonstrates how compression can help with large payloads
app.get('/', (req, res) => {
  // Generate a large text string by repeating Lorem Ipsum text
  // In a real application, this could be data from a file or database
  const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ';
  const largeText = loremIpsum.repeat(1000); // Repeat to create a sizable response

  // Send the large text as the response
  res.send(largeText);
});

// Set the port for the server to listen on
const PORT = 3000;

// Start the server and log a message when it's running
app.listen(PORT, () => {
  console.log(`Compression-enabled server is running on port ${PORT}`);
});
