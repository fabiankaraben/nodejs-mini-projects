# Email Sender API

This is a simple email dispatching backend built with Node.js and TypeScript. It provides a REST API endpoint to send emails using Nodemailer with SMTP configuration. This project is designed for notification practice and does not include any security features.

## Features

- Send emails via SMTP using Nodemailer
- Single POST endpoint for sending emails
- Support for plain text and HTML email bodies
- Docker deployment ready
- TypeScript for type safety

## Prerequisites

- Node.js (version 18 or higher)
- Docker (for containerized deployment)
- SMTP server credentials (e.g., Gmail, Outlook, or any SMTP provider)

## Installation

1. Clone or download this project.
2. Navigate to the project directory:
   ```
   cd basic/13-email-sender-api
   ```
3. Install dependencies:
   ```
   npm install
   ```

## Configuration

Before running the application, you need to configure your SMTP settings. You can do this using environment variables:

- `SMTP_HOST`: SMTP server host (default: smtp.gmail.com)
- `SMTP_PORT`: SMTP server port (default: 587)
- `SMTP_USER`: SMTP username (your email address)
- `SMTP_PASS`: SMTP password or app-specific password
- `FROM_EMAIL`: The email address to send from (default: same as SMTP_USER)
- `PORT`: Port for the server to listen on (default: 3000)

For Gmail, you'll need to:
1. Enable 2-factor authentication
2. Generate an app-specific password
3. Use your Gmail address as SMTP_USER and the app password as SMTP_PASS

## Running Locally

To run the application locally:

1. Set your environment variables (create a `.env` file or export them)
2. Build the TypeScript code:
   ```
   npm run build
   ```
3. Start the server:
   ```
   npm start
   ```
   Or for development with auto-reload:
   ```
   npm run dev
   ```

The server will start on port 3000 (or your configured PORT).

## Docker Deployment

To run the application using Docker:

1. Build the Docker image:
   ```
   docker build -t email-sender-api .
   ```
2. Run the container with environment variables:
   ```
   docker run -p 3000:3000 \
     -e SMTP_HOST=your-smtp-host \
     -e SMTP_PORT=587 \
     -e SMTP_USER=your-email@example.com \
     -e SMTP_PASS=your-password \
     -e FROM_EMAIL=your-email@example.com \
     email-sender-api
   ```

## Usage

Send a POST request to `/send-email` with a JSON body containing the email details:

```json
{
  "to": "recipient@example.com",
  "subject": "Test Email",
  "text": "This is a plain text email.",
  "html": "<p>This is an <strong>HTML</strong> email.</p>"
}
```

- `to` (required): Recipient email address
- `subject` (required): Email subject
- `text` (required if html not provided): Plain text body
- `html` (required if text not provided): HTML body

Example using curl:

```bash
curl -X POST http://localhost:3000/send-email \
  -H "Content-Type: application/json" \
  -d '{
    "to": "test@example.com",
    "subject": "Hello",
    "text": "Hello from the Email Sender API!"
  }'
```

Successful response:
```json
{
  "message": "Email sent successfully",
  "messageId": "<message-id@example.com>"
}
```

Error response:
```json
{
  "error": "Failed to send email"
}
```

## API Endpoint

- **POST /send-email**: Send an email

## Note

This is a basic implementation without authentication or rate limiting. In production, consider adding security measures, input validation, and error handling.
