# Use the official Node.js 18 Alpine image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the source code
COPY src ./src
COPY tsconfig.json ./

# Build the TypeScript code
RUN npm run build

# Expose any ports if needed (not in this case, as it's not a server)
# EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]
