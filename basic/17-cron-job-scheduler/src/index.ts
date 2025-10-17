import * as cron from 'node-cron';

// This is the main entry point of the cron job scheduler service.
// The service uses node-cron to schedule and run periodic tasks.
// No database or APIs are used; it simply logs messages at scheduled intervals.

// Schedule a task to run every minute.
// The cron expression '* * * * *' means:
// - Minute: every minute (0-59)
// - Hour: every hour (0-23)
// - Day of month: every day (1-31)
// - Month: every month (1-12)
// - Day of week: every day (0-7, where 0 and 7 are Sunday)
cron.schedule('* * * * *', () => {
  // Log the current timestamp and a message indicating the task ran.
  console.log(`[${new Date().toISOString()}] Scheduled task executed: Logging every minute`);
});

// Schedule another task to run every 5 minutes.
// This demonstrates multiple cron jobs running concurrently.
cron.schedule('*/5 * * * *', () => {
  console.log(`[${new Date().toISOString()}] Scheduled task executed: Logging every 5 minutes`);
});

// Keep the Node.js process running indefinitely to allow cron jobs to execute.
// Without this, the process would exit immediately after starting.
console.log('Cron job scheduler started. Tasks will run at scheduled intervals.');
console.log('Press Ctrl+C to stop the service.');
