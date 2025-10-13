import express, { Request, Response, NextFunction } from 'express';

// Create an Express application instance
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Define a simple test route that returns a success message
app.get('/api/test', (req: Request, res: Response) => {
  res.json({ message: 'API is working correctly!' });
});

// Define a route that intentionally throws a 500 error for testing error handling
app.get('/api/error/500', (req: Request, res: Response) => {
  // Simulate an internal server error
  throw new Error('This is a simulated internal server error');
});

// Define a route that throws a custom error
app.get('/api/error/custom', (req: Request, res: Response) => {
  // Create a custom error object
  const error = new Error('Custom error for testing');
  error.name = 'CustomError';
  throw error;
});

// Middleware for handling errors (must be placed after routes)
// This catches any errors thrown in the routes above
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  // Log the error to the console for debugging
  console.error('Error caught:', err.message);

  // Determine the status code based on the error type
  let statusCode = 500; // Default to 500 for internal server errors

  // If the error is a known type, set appropriate status
  if (err.name === 'ValidationError') {
    statusCode = 400;
  } else if (err.name === 'UnauthorizedError') {
    statusCode = 401;
  }

  // Send a JSON response with the error details
  res.status(statusCode).json({
    error: {
      message: err.message,
      name: err.name,
      status: statusCode
    }
  });
});

// Catch-all route for handling 404 Not Found errors
// This must be placed after all other routes
app.use('*', (req: Request, res: Response) => {
  res.status(404).json({
    error: {
      message: 'Route not found',
      status: 404
    }
  });
});

// Define the port to listen on, defaulting to 3000
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
