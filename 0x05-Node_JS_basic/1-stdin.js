// Display the initial message
console.log("Welcome to Holberton School, what is your name?");

// Read input from the user
process.stdin.once('data', (input) => {
    // Extract and trim the input
    const name = input.toString().trim();

    // Display the user's name
    console.log(`Your name is: ${name}`);

    // Display closing message
    console.log("This important software is now closing");
});
