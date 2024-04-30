let nameEntered = false; // Flag to track if the user entered a name

// Display the initial message
console.log('Welcome to Holberton School, what is your name?');

// Read input from the user
process.stdin.once('data', (input) => {
  // Extract and trim the input
  const name = input.toString().trim();

  // Check if the name is non-empty
  if (name) {
    // Display the user's name
    console.log(`Your name is: ${name}`);
    nameEntered = true;
  }

  // Display closing message if no name entered
  if (!nameEntered) {
    console.log('This important software is now closing');
  }
});
