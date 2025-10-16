# File Upload Handler

This is a simple file upload service built with Node.js and TypeScript. It handles multipart form data uploads using the Multer middleware, stores uploaded files locally in the `uploads` directory, and provides a single POST endpoint for file uploads. There is no security implemented in this service.

## Features

- **Node.js with TypeScript**: The service is written in TypeScript for better type safety and maintainability.
- **Multipart Upload Handling**: Uses Multer to parse multipart/form-data requests.
- **Local File Storage**: Uploaded files are stored in the local `uploads` directory.
- **POST Endpoint**: A single endpoint `/upload` that accepts file uploads.
- **Docker Deployment**: Includes a Dockerfile for containerized deployment, suitable for media handling scenarios.

## Prerequisites

- Node.js (version 18 or later)
- npm or yarn
- Docker (for containerized deployment)

## Installation

1. Clone the repository or navigate to the project directory.
2. Install the dependencies:

   ```
   npm install
   ```

## Usage

### Development

To run the service in development mode with hot reloading:

```
npm run dev
```

This will start the server using `ts-node` and listen on port 3000.

### Production

1. Build the TypeScript code:

   ```
   npm run build
   ```

2. Start the server:

   ```
   npm start
   ```

The server will listen on port 3000 (or the port specified in the `PORT` environment variable).

### Docker Deployment

1. Build the Docker image:

   ```
   docker build -t file-upload-handler .
   ```

2. Run the container:

   ```
   docker run -p 3000:3000 file-upload-handler
   ```

This will start the service in a Docker container, mapping port 3000 on the host to port 3000 in the container.

## API Usage

### Upload a File

Send a POST request to `/upload` with a file attached in the `file` field.

Example using curl:

```
curl -X POST -F "file=@/path/to/your/file.jpg" http://localhost:3000/upload
```

#### Response

- **Success (200)**: Returns a JSON object with the message, filename, and path.

  ```json
  {
    "message": "File uploaded successfully",
    "filename": "file.jpg",
    "path": "/app/uploads/file.jpg"
  }
  ```

- **Error (400)**: If no file is uploaded.

  ```json
  {
    "error": "No file uploaded"
  }
  ```

## Project Structure

- `src/server.ts`: Main server file with Express setup and Multer configuration.
- `package.json`: Project dependencies and scripts.
- `tsconfig.json`: TypeScript configuration.
- `Dockerfile`: Docker image configuration.
- `uploads/`: Directory where uploaded files are stored (created automatically).

## Notes

- Files are stored with their original filenames.
- No file type validation or size limits are implemented.
- This is a basic implementation without security measures; do not use in production without adding appropriate security controls.
