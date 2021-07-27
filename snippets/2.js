var myName = "Sylvana Santos";
// This is an error because:
// 1. TypeScript knows 'myName' is of type 'string'
// 2. The 'string' type doesn't have a 'len' property
// Error: Property 'len' does not exist on type 'string'.
console.log(myName.len);
// Here, TypeScript knows 'length' exists,
// but it's a number, not a function.
// Error: This expression is not callable.
// Type 'Number' has no call signatures.
console.log(myName.length());
// Much better!
console.log(myName.length);
