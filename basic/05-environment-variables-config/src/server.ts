// Import required modules
import express from 'express';
import dotenv from 'dotenv';

// Load environment variables from .env file into process.env
dotenv.config();

// Define a configuration object using environment variables
// This centralizes app settings loaded from the environment
const config = {
  port: process.env.PORT || 3000,  // Server port, defaults to 3000 if not set
  nodeEnv: process.env.NODE_ENV || 'development',  // Environment mode, e.g., 'development', 'production'
  appName: process.env.APP_NAME || 'Config Service',  // Application name
  databaseUrl: process.env.DATABASE_URL || 'not_set',  // Example: database connection string
};

// Initialize Express application
const app = express();

// Middleware to parse JSON requests (though not used in this simple service)
app.use(express.json());

// Define GET endpoint at /config to return the configuration as JSON
app.get('/config', (req, res) => {
  // Respond with the config object containing environment-based settings
  res.json(config);
});

// Start the server on the specified port
app.listen(config.port, () => {
  console.log(`Config service running on port ${config.port} in ${config.nodeEnv} mode`);
});
