import express from 'express';
import bodyParser from 'body-parser';

// Create an Express application instance
const app = express();

// Define the port on which the server will listen, defaulting to 3000
const PORT = process.env.PORT || 3000;

// Middleware to parse URL-encoded form data (application/x-www-form-urlencoded)
// This allows the server to handle POST requests with form data sent from HTML forms
app.use(bodyParser.urlencoded({ extended: true }));

// Define a POST endpoint at '/parse' to handle form data parsing
app.post('/parse', (req, res) => {
  // Extract the parsed form data from the request body
  const formData = req.body;

  // Basic input validation practice: Check if the form data is an object and not empty
  if (!formData || typeof formData !== 'object' || Object.keys(formData).length === 0) {
    // If validation fails, respond with a 400 Bad Request status and an error message
    return res.status(400).json({
      error: 'Invalid form data. Please provide valid form fields.'
    });
  }

  // For each field in the form data, perform basic validation (e.g., check if string fields are not empty)
  // This is a simple example for input validation practice
  const validatedData: { [key: string]: string } = {};
  for (const [key, value] of Object.entries(formData)) {
    if (typeof value === 'string' && value.trim() !== '') {
      // Trim whitespace and store valid string values
      validatedData[key] = value.trim();
    } else {
      // If a field is invalid, respond with an error
      return res.status(400).json({
        error: `Invalid value for field '${key}'. Must be a non-empty string.`
      });
    }
  }

  // Echo back the validated form data as a JSON response
  // This demonstrates that the form data has been successfully parsed and validated
  res.json({
    message: 'Form data parsed and validated successfully',
    data: validatedData
  });
});

// Define a GET endpoint at '/' to provide basic information about the service
app.get('/', (req, res) => {
  res.json({
    message: 'Form Data Parser Service',
    endpoints: {
      POST_parse: 'Send POST requests with form data to /parse to parse and validate it'
    }
  });
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Form data parser server is running on http://localhost:${PORT}`);
});
