import mongoose from 'mongoose';

// Define a simple User schema using Mongoose
// This schema represents a user with a name and email field
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true }
});

// Create a model from the schema
// The model allows us to interact with the 'users' collection in MongoDB
const User = mongoose.model('User', userSchema);

// Function to connect to MongoDB
// This establishes a connection to the MongoDB database using the provided URI
async function connectToMongoDB(uri: string): Promise<void> {
  try {
    await mongoose.connect(uri);
    console.log('Connected to MongoDB successfully!');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
}

// Function to insert sample data
// This function creates and saves new user documents to the database
async function insertSampleData(): Promise<void> {
  const users = [
    { name: 'John Doe', email: 'john@example.com' },
    { name: 'Jane Smith', email: 'jane@example.com' }
  ];

  try {
    for (const userData of users) {
      const user = new User(userData);
      await user.save();
      console.log(`Inserted user: ${user.name} (${user.email})`);
    }
  } catch (error) {
    console.error('Error inserting data:', error);
  }
}

// Function to query data
// This function retrieves all users from the database and logs them
async function queryData(): Promise<void> {
  try {
    const users = await User.find({});
    console.log('Queried users:');
    users.forEach(user => {
      console.log(`- ${user.name} (${user.email})`);
    });
  } catch (error) {
    console.error('Error querying data:', error);
  }
}

// Main function to run the operations
// This orchestrates the connection, data insertion, querying, and disconnection
async function main(): Promise<void> {
  // MongoDB connection URI - in a real app, this would come from environment variables
  const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/mydb';

  // Connect to MongoDB
  await connectToMongoDB(mongoURI);

  // Insert sample data
  await insertSampleData();

  // Query and display data
  await queryData();

  // Close the connection
  await mongoose.connection.close();
  console.log('Connection closed.');
}

// Run the main function
main().catch(console.error);
