# Password Hashing Service

This is a security utility implemented in Node.js with TypeScript that hashes passwords using the bcrypt library. It provides a command-line interface for securely hashing passwords, with no APIs, no database, and Docker deployment support. This project demonstrates basic cryptographic concepts for password security.

## Features

- **Password Hashing**: Uses bcrypt to hash passwords with a configurable salt rounds (default 10).
- **Command-Line Interface**: Accepts a password as a command-line argument and outputs the hashed password.
- **Verification**: Includes a verification step to demonstrate that the hash can be checked against the original password.
- **No Database**: Purely in-memory operation with no data persistence.
- **No APIs**: Simple utility with no server or network endpoints.
- **Docker Support**: Can be containerized for easy deployment and testing.

## Prerequisites

- Node.js (version 18 or later)
- npm
- Docker (for containerized deployment)

## Installation

1. Clone or download this project to your local machine.
2. Navigate to the project directory.
3. Install dependencies:

   ```bash
   npm install
   ```

## Usage

### Running Locally

1. Build the TypeScript code (optional, but recommended for production):

   ```bash
   npm run build
   ```

2. Hash a password:

   ```bash
   npm start "yourpassword"
   ```

   Or for development (runs directly with ts-node):

   ```bash
   npm run dev "yourpassword"
   ```

   Replace `"yourpassword"` with the actual password you want to hash.

3. The output will show:
   - The hashed password (a bcrypt hash string)
   - Verification result (true if the hash matches the original password)

   Example output:
   ```
   Hashed Password: $2b$10$abcdefghijklmnopqrstuvwx.yzABCDEFGHIJKLMNOPQRSTUVWXYZ12
   Verification (password matches hash): true
   ```

### Running with Docker

1. Build the Docker image:

   ```bash
   docker build -t password-hasher .
   ```

2. Run the container with a password argument:

   ```bash
   docker run password-hasher "yourpassword"
   ```

   Alternatively, use Docker Compose for easier testing with a sample password:

   ```bash
   docker-compose up
   ```

   The container will output the hashed password and verification as above.

## Development

For development with TypeScript compilation on-the-fly, use:

```bash
npm run dev "yourpassword"
```

This uses `ts-node` to run the TypeScript code directly without pre-compilation.

## Project Structure

- `src/index.ts`: Main utility implementation with password hashing logic
- `dist/`: Compiled JavaScript files (generated after `npm run build`)
- `package.json`: Project dependencies and scripts
- `tsconfig.json`: TypeScript configuration
- `Dockerfile`: Docker container configuration
- `README.md`: This file

## How It Works

1. The utility takes a password from the command-line arguments.
2. It uses bcrypt to generate a salt and hash the password with 10 salt rounds.
3. The resulting hash is a string that includes the salt and the hashed password.
4. For demonstration, it verifies the hash by comparing it back to the original password.
5. The hash can be stored securely (e.g., in a database) and later used to verify user passwords without storing the original password.

**Security Note**: Always use a sufficient number of salt rounds (at least 10) for production use. Higher rounds increase security but also computation time.
