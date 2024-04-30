// Display the initial message
console.log('Welcome to Holberton School, what is your name?');

// Check if there is data in the pipeline
if (process.stdin.isTTY) {
  // Read input from the user
  process.stdin.once('data', (input) => {
    handleInput(input);
  });
} else {
  // Read input from the pipeline
  let data = '';
  process.stdin.on('readable', () => {
    const chunk = process.stdin.read();
    if (chunk !== null) {
      data += chunk;
    }
  });
  process.stdin.on('end', () => {
    handleInput(data);
  });
}

// Function to handle input
const handleInput = (input) => {
  // Extract and trim the input
  const name = input.toString().trim();

  // Display the user's name
  console.log(`Your name is: ${name}`);

  // Display closing message
  console.log('This important software is now closing');

  // Exit the process
  process.exit();
};
