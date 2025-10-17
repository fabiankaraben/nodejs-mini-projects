import express from 'express';
import { add, subtract, multiply, divide, factorial } from './math';

/**
 * Express server for a simple math API.
 * Provides endpoints for basic arithmetic operations and factorial calculation.
 * All operations are performed using the math utility functions.
 */

const app = express();
const PORT = process.env.PORT || 3000;

/**
 * Middleware to parse JSON requests.
 * This allows the server to handle JSON payloads if needed in the future.
 */
app.use(express.json());

/**
 * Health check endpoint.
 * Returns a simple JSON response to verify the server is running.
 */
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Math API is running' });
});

/**
 * Endpoint for addition operation.
 * Accepts query parameters 'a' and 'b' as numbers.
 * Returns the sum of a and b.
 */
app.get('/add', (req, res) => {
  const a = parseFloat(req.query.a as string);
  const b = parseFloat(req.query.b as string);

  if (isNaN(a) || isNaN(b)) {
    return res.status(400).json({ error: 'Invalid numbers provided' });
  }

  try {
    const result = add(a, b);
    res.json({ operation: 'add', a, b, result });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

/**
 * Endpoint for subtraction operation.
 * Accepts query parameters 'a' and 'b' as numbers.
 * Returns the difference of a and b.
 */
app.get('/subtract', (req, res) => {
  const a = parseFloat(req.query.a as string);
  const b = parseFloat(req.query.b as string);

  if (isNaN(a) || isNaN(b)) {
    return res.status(400).json({ error: 'Invalid numbers provided' });
  }

  try {
    const result = subtract(a, b);
    res.json({ operation: 'subtract', a, b, result });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

/**
 * Endpoint for multiplication operation.
 * Accepts query parameters 'a' and 'b' as numbers.
 * Returns the product of a and b.
 */
app.get('/multiply', (req, res) => {
  const a = parseFloat(req.query.a as string);
  const b = parseFloat(req.query.b as string);

  if (isNaN(a) || isNaN(b)) {
    return res.status(400).json({ error: 'Invalid numbers provided' });
  }

  try {
    const result = multiply(a, b);
    res.json({ operation: 'multiply', a, b, result });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

/**
 * Endpoint for division operation.
 * Accepts query parameters 'a' and 'b' as numbers.
 * Returns the quotient of a and b.
 */
app.get('/divide', (req, res) => {
  const a = parseFloat(req.query.a as string);
  const b = parseFloat(req.query.b as string);

  if (isNaN(a) || isNaN(b)) {
    return res.status(400).json({ error: 'Invalid numbers provided' });
  }

  try {
    const result = divide(a, b);
    res.json({ operation: 'divide', a, b, result });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

/**
 * Endpoint for factorial calculation.
 * Accepts query parameter 'n' as a non-negative integer.
 * Returns the factorial of n.
 */
app.get('/factorial', (req, res) => {
  const n = parseInt(req.query.n as string, 10);

  if (isNaN(n) || n < 0) {
    return res.status(400).json({ error: 'Please provide a non-negative integer for n' });
  }

  try {
    const result = factorial(n);
    res.json({ operation: 'factorial', n, result });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

/**
 * Start the server on the specified port.
 * Logs a message to the console when the server is running.
 */
app.listen(PORT, () => {
  console.log(`Math API server is running on port ${PORT}`);
});
