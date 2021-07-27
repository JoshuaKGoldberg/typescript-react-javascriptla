// This greetPerson function might have previously had one parameter,
// but now it's been refactored to have two...
function greetPerson(first, last) {
    console.log(`Hello, ${first} ${last}!`);
}

// ...and we forgot to update some code to provide two parameters!
// Error: Expected 2 arguments, but got 1.
// An argument for 'last' was not provided.
greetPerson("Sylvana Santos");
// greetPerson("Sylvana", "Santos");
