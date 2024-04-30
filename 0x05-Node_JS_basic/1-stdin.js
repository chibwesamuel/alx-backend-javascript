let nameEntered = false; // Flag to track if the user entered a name

// Display the initial message
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Read input from the user
process.stdin.on('data', (input) => {
  // Extract and trim the input
  const name = input.toString().trim();

  // Check if the name is non-empty
  if (name) {
    // Display the user's name
    process.stdout.write(`Your name is: ${name}\n`);
    nameEntered = true;
  }

  // Check if the user pressed Enter without typing anything
  if (input.length === 1 && input.toString().trim() === '' && nameEntered) {
    // Display closing message
    process.stdout.write('This important software is now closing\n');
    process.exit(); // Exit the process
  }
});
