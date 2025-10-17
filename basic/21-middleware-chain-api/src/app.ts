import express, { Request, Response, NextFunction } from 'express';

const app = express();

// Middleware 1: Logging middleware
// This middleware logs the HTTP method and URL of every incoming request
// It runs for all requests and helps in monitoring and debugging the application
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Middleware 2: JSON parsing middleware
// Parses incoming JSON payloads in request bodies, making them available as req.body
app.use(express.json());

// Custom authentication middleware
// Checks for an 'Authorization' header with value 'Bearer secret-token'
// If not present or incorrect, returns 401 Unauthorized
// This simulates a simple authentication mechanism
function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  if (authHeader === 'Bearer secret-token') {
    next(); // Proceed to next middleware/route
  } else {
    res.status(401).json({ error: 'Unauthorized' });
  }
}

// Public endpoint: No authentication required
// Accessible to all users, demonstrates middleware chain without auth
app.get('/api/public', (req: Request, res: Response) => {
  res.json({ message: 'This is a public endpoint', timestamp: new Date().toISOString() });
});

// Private endpoint: Requires authentication
// Uses the authMiddleware before handling the request
// Demonstrates how authentication middleware protects certain routes
app.get('/api/private', authMiddleware, (req: Request, res: Response) => {
  res.json({ message: 'This is a private endpoint', user: 'authenticated-user' });
});

// Start the server on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
