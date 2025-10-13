# Static File Server

A basic static file server built with Node.js and TypeScript. This server serves HTML, CSS, and JavaScript files from a `public` directory using Node.js's built-in HTTP module.

## Features

- Serves static files (HTML, CSS, JS, images, etc.)
- Simple file routing
- No database required
- No security features (serves all files in the public directory)
- Docker deployment support
- TypeScript implementation

## Prerequisites

- Node.js (version 18 or higher)
- npm or yarn
- Docker (for containerized deployment)

## Installation

1. Clone or download this project.
2. Navigate to the project directory:
   ```bash
   cd 02-static-file-server
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

### Development

To run the server in development mode (with TypeScript compilation on-the-fly):

```bash
npm run dev
```

To build and run the production version:

```bash
npm run build
npm start
```

The server will start on `http://localhost:3000` by default. You can change the port by setting the `PORT` environment variable.

### Docker

To build and run the server using Docker:

```bash
docker build -t static-file-server .
docker run -p 3000:3000 static-file-server
```

## File Structure

```
02-static-file-server/
├── src/
│   └── server.ts          # Main server implementation
├── public/
│   ├── index.html         # Sample HTML page
│   ├── css/
│   │   └── style.css      # Sample CSS file
│   └── js/
│       └── script.js      # Sample JavaScript file
├── package.json
├── tsconfig.json
├── Dockerfile
└── README.md
```

## How It Works

The server listens for HTTP requests and serves files from the `public` directory. If a request is made to the root path (`/`), it defaults to serving `index.html`. The server determines the appropriate MIME type based on the file extension and serves the file content.

## Customization

- To serve files from a different directory, modify the `PUBLIC_DIR` constant in `src/server.ts`.
- Add more MIME types to the `MIME_TYPES` object if needed.
- For production use, consider adding security features, caching, and compression.
