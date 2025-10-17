import * as bcrypt from 'bcrypt';

/**
 * Main function to hash a password using bcrypt.
 * This utility takes a password as a command-line argument,
 * hashes it securely using bcrypt with a salt round of 10,
 * and outputs the hashed password to the console.
 *
 * Usage: npm run dev "yourpassword" or npm start "yourpassword"
 * (after building)
 */
async function main() {
  // Get the password from command-line arguments
  const password = process.argv[2];

  // Check if a password was provided
  if (!password) {
    console.error('Error: Please provide a password to hash as a command-line argument.');
    console.error('Usage: node dist/index.js "yourpassword"');
    process.exit(1);
  }

  try {
    // Define the number of salt rounds for bcrypt (higher is more secure but slower)
    const saltRounds = 10;

    // Hash the password asynchronously
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Output the hashed password
    console.log('Hashed Password:', hashedPassword);

    // For demonstration, verify the hash by comparing it with the original password
    const isMatch = await bcrypt.compare(password, hashedPassword);
    console.log('Verification (password matches hash):', isMatch);
  } catch (error) {
    // Handle any errors during hashing
    console.error('Error hashing password:', error);
    process.exit(1);
  }
}

// Run the main function
main();
