import express from 'express';

// Initialize the Express application
const app = express();

// Define the port number for the server
const PORT = process.env.PORT || 3000;

// In-memory data storage: an array of sample items
const data = [
  { id: 1, name: 'Item 1', description: 'This is the first item' },
  { id: 2, name: 'Item 2', description: 'This is the second item' },
  { id: 3, name: 'Item 3', description: 'This is the third item' }
];

// Define a GET endpoint that returns JSON data
app.get('/api/data', (req, res) => {
  // Send the in-memory data as JSON response
  res.json(data);
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
