// Display the initial message
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Read input from the user
process.stdin.once('data', (input) => {
  // Extract and trim the input
  const name = input.toString().trim();

  // Display the user's name
  process.stdout.write(`Your name is: ${name}\n`);

  // Display closing message
  process.stdout.write('This important software is now closing\n');
});
