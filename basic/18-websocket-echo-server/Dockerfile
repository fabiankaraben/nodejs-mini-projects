# Use the official Node.js 18 Alpine image for a lightweight container
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the source code into the container
COPY src/ ./src/

# Expose port 8080 for the WebSocket server
EXPOSE 8080

# Command to run the application
CMD ["npm", "start"]
