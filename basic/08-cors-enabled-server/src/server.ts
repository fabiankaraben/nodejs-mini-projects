import express from 'express';
import cors from 'cors';

// Create an Express application
const app = express();

// Define the port on which the server will listen
const PORT = process.env.PORT || 3000;

// Enable CORS for all routes and origins
// This allows cross-origin requests from any frontend application
app.use(cors());

// Middleware to parse JSON bodies in requests
app.use(express.json());

// Simple GET endpoint to check server status
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the CORS-enabled API server!' });
});

// API endpoint to retrieve a list of mock users
// This demonstrates a basic GET endpoint that can be called from a frontend
app.get('/api/users', (req, res) => {
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com' }
  ];
  res.json(users);
});

// API endpoint to handle POST requests with JSON data
// This demonstrates accepting data from a frontend and echoing it back
app.post('/api/data', (req, res) => {
  const data = req.body;
  // In a real application, you might process or store the data here
  // For this demo, we just echo it back with a timestamp
  res.json({
    received: true,
    timestamp: new Date().toISOString(),
    data: data
  });
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`CORS-enabled server is running on http://localhost:${PORT}`);
});
