import express, { Request, Response, NextFunction } from 'express';

// Define the port on which the server will listen, defaulting to 3000
const PORT = process.env.PORT || 3000;

// Create an Express application instance
const app = express();

// Middleware to parse JSON bodies in requests
app.use(express.json());

// Custom logging middleware to log each incoming request
app.use((req: Request, res: Response, next: NextFunction) => {
  // Get the current timestamp in ISO format
  const timestamp = new Date().toISOString();
  // Log the HTTP method, URL, and timestamp to the console
  console.log(`[${timestamp}] ${req.method} ${req.url}`);
  // Call the next middleware or route handler
  next();
});

// Define a route for the root path '/'
app.get('/', (req: Request, res: Response) => {
  // Respond with a simple greeting message
  res.send('Hello from the logging service!\n');
});

// Define a health check endpoint
app.get('/health', (req: Request, res: Response) => {
  // Respond with a JSON object indicating the service is healthy
  res.json({ status: 'OK', message: 'Service is running' });
});

// Define a POST endpoint to manually log a message
app.post('/log', (req: Request, res: Response) => {
  // Extract the message from the request body
  const { message } = req.body;
  // If a message is provided, log it to the console with a timestamp
  if (message) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] Custom log: ${message}`);
    // Respond with success
    res.json({ status: 'logged', message: 'Message logged successfully' });
  } else {
    // If no message, respond with an error
    res.status(400).json({ error: 'No message provided' });
  }
});

// Define a GET endpoint to retrieve logs (simulated, as no database)
app.get('/logs', (req: Request, res: Response) => {
  // Respond with a message explaining that logs are output to console
  res.json({
    message: 'Logs are output to the console. Check the server logs for details.',
    note: 'This is a basic service; logs are not persisted.'
  });
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  // Log that the server has started
  console.log(`Logging service is running on http://localhost:${PORT}`);
});
