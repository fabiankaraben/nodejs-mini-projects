import express from 'express';
import rateLimit from 'express-rate-limit';

// Create an Express application instance
const app = express();

// Define the port the server will listen on
const PORT = process.env.PORT || 3000;

// Configure rate limiting middleware
// This limits requests per IP address to prevent abuse
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes window
  max: 100, // Limit each IP to 100 requests per windowMs
  message: {
    error: 'Too many requests from this IP, please try again later.'
  },
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

// Apply the rate limiting middleware to all requests
app.use(limiter);

// Middleware to parse JSON bodies in requests
app.use(express.json());

// Basic endpoint that returns some sample data
// This is rate-limited as per the global limiter
app.get('/api/data', (req, res) => {
  // Get the client's IP address from the request
  const clientIP = req.ip || req.connection.remoteAddress || 'unknown';

  // Return a JSON response with sample data and the client's IP
  res.json({
    message: 'This is a rate-limited API response',
    data: {
      id: 1,
      description: 'Sample data from the API',
      timestamp: new Date().toISOString()
    },
    clientIP: clientIP
  });
});

// Another basic endpoint for demonstration
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    message: 'API is running and healthy'
  });
});

// Root endpoint with a welcome message
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the Rate Limiting API',
    endpoints: {
      '/api/data': 'Get sample data (rate limited)',
      '/api/health': 'Check API health (rate limited)'
    }
  });
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
