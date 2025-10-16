import express from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';

// Create an Express application instance
const app = express();

// Define the port the server will listen on
const PORT = process.env.PORT || 3000;

// Configure Multer for file storage
// Files will be stored in the 'uploads' directory
const storage = multer.diskStorage({
  // Specify the destination directory for uploaded files
  destination: (req, file, cb) => {
    const uploadDir = path.join(__dirname, '../uploads');
    // Create the uploads directory if it doesn't exist
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  // Specify the filename for the uploaded file
  // Use the original filename
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

// Create the Multer instance with the storage configuration
const upload = multer({ storage });

// Define the POST endpoint for file uploads
// This endpoint accepts a single file with the field name 'file'
app.post('/upload', upload.single('file'), (req, res) => {
  // Check if a file was uploaded
  if (!req.file) {
    // If no file was provided, return a 400 Bad Request error
    return res.status(400).json({ error: 'No file uploaded' });
  }

  // If the file was uploaded successfully, return a success message
  // Include the filename and path in the response
  res.json({
    message: 'File uploaded successfully',
    filename: req.file.filename,
    path: req.file.path
  });
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
