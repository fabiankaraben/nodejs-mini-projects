import express from 'express';
import jwt from 'jsonwebtoken';

// Initialize Express application
const app = express();

// Define the port for the server, defaulting to 3000 if not set in environment
const PORT = process.env.PORT || 3000;

// JWT secret key - in a real application, this should be stored securely in environment variables
const JWT_SECRET = 'your-secret-key';

// Middleware to parse incoming JSON request bodies
app.use(express.json());

// Middleware to authenticate JWT tokens
const authenticateToken = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  // Extract the token from the Authorization header (Bearer token)
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

  if (!token) {
    // If no token provided, return 401
    return res.status(401).json({ message: 'Access token required' });
  }

  // Verify the token
  jwt.verify(token, JWT_SECRET, (err: any, user: any) => {
    if (err) {
      // If token is invalid or expired, return 403
      return res.status(403).json({ message: 'Invalid or expired token' });
    }
    // If valid, attach user info to request object
    (req as any).user = user;
    next(); // Proceed to the next middleware/route
  });
};

// POST endpoint for user login
// This endpoint authenticates the user and issues a JWT token
app.post('/login', (req, res) => {
  // Extract username and password from the request body
  const { username, password } = req.body;

  // Simple hardcoded authentication (no database integration)
  // In a real application, you would check against a database or external service
  if (username === 'user' && password === 'pass') {
    // If credentials are valid, generate a JWT token
    // The token payload contains userId and username
    // Token expires in 1 hour
    const token = jwt.sign({ userId: 1, username }, JWT_SECRET, { expiresIn: '1h' });

    // Respond with the generated token
    res.json({ token });
  } else {
    // If credentials are invalid, return 401 Unauthorized
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// GET endpoint for user profile (protected)
// Requires a valid JWT token in the Authorization header
app.get('/profile', authenticateToken, (req, res) => {
  // Since the token is verified, we can access user info from req.user
  const user = (req as any).user;
  // In a real application, you would fetch user data from a database
  // Here, we return mock profile data based on the token payload
  res.json({
    userId: user.userId,
    username: user.username,
    email: 'user@example.com', // Mock data
    profile: 'This is a sample user profile.'
  });
});

// GET endpoint for the root path
// Provides basic information about the API
app.get('/', (req, res) => {
  res.send('JWT Token Generator API. Use POST /login to get a token. Use GET /profile with Bearer token to access protected data.');
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
