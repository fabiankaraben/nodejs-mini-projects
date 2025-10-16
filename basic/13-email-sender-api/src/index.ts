import express from 'express';
import nodemailer from 'nodemailer';

// Create an Express application instance
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Define the port the server will listen on, defaulting to 3000
const PORT = process.env.PORT || 3000;

// Configure the SMTP transporter for sending emails
// Note: In a real application, use environment variables for sensitive data like passwords
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com', // SMTP server host
  port: parseInt(process.env.SMTP_PORT || '587'), // SMTP port (587 for TLS)
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER || 'your-email@gmail.com', // SMTP username
    pass: process.env.SMTP_PASS || 'your-app-password' // SMTP password or app password
  }
});

// Define a POST endpoint for sending emails
app.post('/send-email', async (req, res) => {
  try {
    // Extract email details from the request body
    const { to, subject, text, html } = req.body;

    // Validate required fields
    if (!to || !subject || (!text && !html)) {
      return res.status(400).json({ error: 'Missing required fields: to, subject, and text or html' });
    }

    // Prepare the email options
    const mailOptions = {
      from: process.env.FROM_EMAIL || 'your-email@gmail.com', // Sender email
      to, // Recipient email
      subject, // Email subject
      text, // Plain text body (optional if html is provided)
      html // HTML body (optional)
    };

    // Send the email using the transporter
    const info = await transporter.sendMail(mailOptions);

    // Log the message ID for debugging
    console.log('Email sent:', info.messageId);

    // Respond with success
    res.json({ message: 'Email sent successfully', messageId: info.messageId });
  } catch (error) {
    // Log the error for debugging
    console.error('Error sending email:', error);

    // Respond with error
    res.status(500).json({ error: 'Failed to send email' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Email sender API listening on port ${PORT}`);
});
