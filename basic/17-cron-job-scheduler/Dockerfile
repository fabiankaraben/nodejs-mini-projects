# Use Node.js 18 Alpine image for a lightweight base
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install all dependencies (including dev dependencies for building)
RUN npm ci

# Copy the source code
COPY . .

# Build the TypeScript code to JavaScript
RUN npm run build

# Expose no ports since this is not a web service

# Start the application
CMD ["npm", "start"]
