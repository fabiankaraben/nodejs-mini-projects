import express, { Request, Response } from 'express';

// In-memory user storage for demonstration purposes
// In a real application, you would use a database
interface User {
  username: string;
  password: string;
  role: string;
}

const users: User[] = [
  { username: 'admin', password: 'admin123', role: 'admin' },
  { username: 'user', password: 'user123', role: 'user' }
];

// Basic HTTP Authentication middleware
function authenticate(req: Request, res: Response, next: Function) {
  // Extract the Authorization header
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Basic ')) {
    // Send 401 Unauthorized with WWW-Authenticate header
    res.setHeader('WWW-Authenticate', 'Basic realm="Secure Area"');
    return res.status(401).json({ error: 'Authentication required' });
  }

  // Decode the Base64 encoded credentials
  const base64Credentials = authHeader.split(' ')[1];
  const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
  const [username, password] = credentials.split(':');

  // Check if user exists and password matches
  const user = users.find(u => u.username === username && u.password === password);

  if (!user) {
    res.setHeader('WWW-Authenticate', 'Basic realm="Secure Area"');
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  // Attach user to request object for use in protected routes
  (req as any).user = user;
  next();
}

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Public route - no authentication required
app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Welcome to the Basic Authentication API',
    endpoints: {
      public: 'GET /',
      login: 'GET /login (requires auth)',
      profile: 'GET /profile (requires auth)',
      admin: 'GET /admin (requires auth and admin role)'
    }
  });
});

// Protected route - requires authentication
app.get('/login', authenticate, (req: Request, res: Response) => {
  const user = (req as any).user;
  res.json({
    message: `Welcome back, ${user.username}!`,
    user: {
      username: user.username,
      role: user.role
    }
  });
});

// Protected route - requires authentication
app.get('/profile', authenticate, (req: Request, res: Response) => {
  const user = (req as any).user;
  res.json({
    message: 'Your profile information',
    profile: {
      username: user.username,
      role: user.role,
      // In a real app, you might have more profile data
      lastLogin: new Date().toISOString()
    }
  });
});

// Admin-only route - requires authentication and admin role
app.get('/admin', authenticate, (req: Request, res: Response) => {
  const user = (req as any).user;

  if (user.role !== 'admin') {
    return res.status(403).json({ error: 'Admin access required' });
  }

  res.json({
    message: 'Welcome to the admin panel',
    adminData: {
      totalUsers: users.length,
      serverTime: new Date().toISOString()
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Basic Authentication API server running on port ${PORT}`);
  console.log(`Test users: admin/admin123, user/user123`);
});
