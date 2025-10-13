# SQLite CRUD API

This is a simple CRUD (Create, Read, Update, Delete) backend API built with Node.js, TypeScript, Express, and SQLite. It provides 4 REST endpoints for managing items, with no authentication or security features.

## Features

- **CRUD Operations**: Full create, read, update, and delete functionality for items.
- **SQLite Database**: Lightweight, file-based database for data persistence.
- **TypeScript**: Type-safe development.
- **Docker Compose**: Easy deployment using Docker Compose.

## Endpoints

- `GET /api/items` - Retrieve all items
- `POST /api/items` - Create a new item (requires `name` in body)
- `PUT /api/items/:id` - Update an item by ID (requires `name` in body)
- `DELETE /api/items/:id` - Delete an item by ID

## Setup and Usage

### Prerequisites

- Node.js (for local development)
- Docker and Docker Compose (for containerized deployment)

### Local Development

1. Install dependencies:
   ```
   npm install
   ```

2. Start the development server:
   ```
   npm run dev
   ```

3. The server will run on `http://localhost:3000`

### Using Docker Compose

1. Build and run the application:
   ```
   docker compose up --build
   ```

2. The API will be available at `http://localhost:3000`

### API Usage Examples

#### Create an item

**Using curl:**
```bash
curl -X POST http://localhost:3000/api/items \
  -H "Content-Type: application/json" \
  -d '{"name":"Sample Item","description":"This is a sample item"}'
```

**HTTP Request:**
```
POST /api/items
Content-Type: application/json

{
  "name": "Sample Item",
  "description": "This is a sample item"
}
```

#### Get all items

**Using curl:**
```bash
curl http://localhost:3000/api/items
```

**HTTP Request:**
```
GET /api/items
```

#### Update an item

**Using curl:**
```bash
curl -X PUT http://localhost:3000/api/items/1 \
  -H "Content-Type: application/json" \
  -d '{"name":"Updated Item","description":"Updated description"}'
```

**HTTP Request:**
```
PUT /api/items/1
Content-Type: application/json

{
  "name": "Updated Item",
  "description": "Updated description"
}
```

#### Delete an item

**Using curl:**
```bash
curl -X DELETE http://localhost:3000/api/items/1
```

**HTTP Request:**
```
DELETE /api/items/1
```
