# MongoDB Connection Service

This is a database connector in Node.js with TypeScript, connecting to MongoDB, using Mongoose, insert/query operations, no APIs, no security, and Docker Compose deployment for DB setup practice.

## Description

This mini-project demonstrates how to connect a Node.js application written in TypeScript to a MongoDB database using the Mongoose ODM (Object Data Modeling) library. It performs basic insert and query operations on a simple User model without exposing any APIs or implementing security measures. The project includes Docker Compose configuration to easily set up a MongoDB instance for testing and development.

## Features

- TypeScript-based Node.js application
- MongoDB connection using Mongoose
- Simple User schema with name and email fields
- Insert sample user data
- Query and display all users
- Docker Compose setup for MongoDB
- Dockerfile for containerizing the application

## Prerequisites

- Node.js (version 18 or higher)
- Docker and Docker Compose

## Setup and Usage

### 1. Clone the Repository

Navigate to the project directory.

### 2. Install Dependencies

```bash
npm install
```

### 3. Start MongoDB with Docker Compose

To set up the MongoDB database, use Docker Compose:

```bash
docker compose up -d
```

This will start a MongoDB container on port 27017 with a database named `mydb`.

### 4. Build the TypeScript Code

```bash
npm run build
```

### 5. Run the Application

```bash
npm start
```

The application will connect to MongoDB, insert sample user data, query and display the users, then close the connection.

### Running with Docker Compose

To run both the MongoDB database and the application using Docker Compose:

```bash
docker compose up
```

This will build the application image, start the MongoDB container, and then run the application container. The application will connect to MongoDB, perform the operations, and exit.

For detached mode:

```bash
docker compose up -d
```

Note: Since the application is a script that runs and exits, it may not stay running in detached mode. Use `docker compose logs app` to view the output.

### Running with Docker (Alternative)

If you prefer to run the application separately:

1. Start only the database:

```bash
docker compose up mongodb -d
```

2. Build the Docker image:

```bash
docker build -t mongodb-connection-service .
```

3. Run the container:

```bash
docker run --network container:mongodb-connection-service mongodb-connection-service
```

Note: Ensure the MongoDB container is running first.

## Code Structure

- `src/index.ts`: Main application file containing MongoDB connection logic, schema definition, and CRUD operations
- `package.json`: Project dependencies and scripts
- `tsconfig.json`: TypeScript configuration
- `docker-compose.yml`: Docker Compose configuration for MongoDB and the application
- `Dockerfile`: Docker configuration for the application

## Learning Objectives

This project serves as a practice for:
- Setting up MongoDB with Docker Compose
- Connecting Node.js to MongoDB using Mongoose
- Defining schemas and models in Mongoose
- Performing basic database operations (insert and query)
- Working with TypeScript in a Node.js project
