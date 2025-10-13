// Import necessary modules
import express from 'express';
import sqlite3 from 'sqlite3';

// Create an Express application instance
const app = express();

// Middleware to parse JSON bodies in requests
app.use(express.json());

// Initialize SQLite database
// The database file will be created if it doesn't exist
const db = new sqlite3.Database('./database.db', (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to SQLite database.');
  }
});

// Create the 'items' table if it doesn't exist
// This table stores items with an auto-incrementing ID, name, and description
db.run(`CREATE TABLE IF NOT EXISTS items (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  description TEXT
)`, (err) => {
  if (err) {
    console.error('Error creating table:', err.message);
  } else {
    console.log('Items table ready.');
  }
});

// GET /api/items - Retrieve all items from the database
app.get('/api/items', (req, res) => {
  // Query the database for all items
  db.all('SELECT * FROM items', [], (err, rows) => {
    if (err) {
      // Return error response if query fails
      res.status(500).json({ error: err.message });
      return;
    }
    // Return the items as JSON
    res.json({ items: rows });
  });
});

// POST /api/items - Create a new item
app.post('/api/items', (req, res) => {
  // Extract name and description from request body
  const { name, description } = req.body;

  // Validate that name is provided
  if (!name) {
    return res.status(400).json({ error: 'Name is required' });
  }

  // Insert the new item into the database
  db.run('INSERT INTO items (name, description) VALUES (?, ?)', [name, description], function(err) {
    if (err) {
      // Return error response if insertion fails
      res.status(500).json({ error: err.message });
      return;
    }
    // Return the ID of the newly created item
    res.json({ id: this.lastID });
  });
});

// PUT /api/items/:id - Update an existing item by ID
app.put('/api/items/:id', (req, res) => {
  // Extract ID from URL parameters
  const { id } = req.params;
  // Extract name and description from request body
  const { name, description } = req.body;

  // Validate that name is provided
  if (!name) {
    return res.status(400).json({ error: 'Name is required' });
  }

  // Update the item in the database
  db.run('UPDATE items SET name = ?, description = ? WHERE id = ?', [name, description, id], function(err) {
    if (err) {
      // Return error response if update fails
      res.status(500).json({ error: err.message });
      return;
    }
    if (this.changes === 0) {
      // Return 404 if no item was updated (item not found)
      res.status(404).json({ error: 'Item not found' });
      return;
    }
    // Return success message
    res.json({ message: 'Item updated' });
  });
});

// DELETE /api/items/:id - Delete an item by ID
app.delete('/api/items/:id', (req, res) => {
  // Extract ID from URL parameters
  const { id } = req.params;

  // Delete the item from the database
  db.run('DELETE FROM items WHERE id = ?', [id], function(err) {
    if (err) {
      // Return error response if deletion fails
      res.status(500).json({ error: err.message });
      return;
    }
    if (this.changes === 0) {
      // Return 404 if no item was deleted (item not found)
      res.status(404).json({ error: 'Item not found' });
      return;
    }
    // Return success message
    res.json({ message: 'Item deleted' });
  });
});

// Start the server on port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
