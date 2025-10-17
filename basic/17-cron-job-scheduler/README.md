# Cron Job Scheduler

This is a scheduled task service built in Node.js with TypeScript. It utilizes the `node-cron` library to run automated cron jobs that log periodic messages. The project is designed for simplicity: no database interactions, no external APIs, and focuses on demonstrating scheduled task execution.

## Features

- **Scheduled Tasks**: Uses `node-cron` to schedule and execute tasks at defined intervals.
- **Logging**: Logs messages with timestamps for each scheduled execution.
- **TypeScript**: Fully typed with TypeScript for better code maintainability.
- **Docker Support**: Containerized with Docker for easy deployment and automation.

## Prerequisites

- Node.js (version 18 or higher)
- Docker (optional, for containerized deployment)

## Installation

1. Clone the repository or navigate to the project directory.
2. Install dependencies:

   ```bash
   npm install
   ```

## Usage

### Local Development

To run the service locally:

```bash
# For development (uses ts-node to run TypeScript directly)
npm run dev

# Or build and run
npm run build
npm start
```

The service will start and begin executing scheduled tasks. You will see log messages in the console for each task execution.

### Docker Deployment

To run the service using Docker:

```bash
# Build and start the container
docker compose up --build
```

The cron jobs will run inside the container, logging to the container's stdout.

## Scheduled Tasks

The service currently includes the following cron jobs:

- **Every Minute**: Logs a message every minute.
- **Every 5 Minutes**: Logs a message every 5 minutes.

Cron expressions used:
- `* * * * *`: Every minute
- `*/5 * * * *`: Every 5 minutes

## Stopping the Service

- Locally: Press `Ctrl+C` in the terminal.
- Docker: Use `docker compose down` to stop and remove the container.

## Project Structure

- `src/index.ts`: Main application file containing the cron job schedules.
- `package.json`: Project dependencies and scripts.
- `tsconfig.json`: TypeScript configuration.
- `Dockerfile`: Docker image build instructions.
- `docker-compose.yml`: Docker Compose configuration for easy container management.
