var betterName;
// Ok
betterName = "Sylvana";
// Type 'number' is not assignable to type 'string'.
betterName = 0;
function takesABoolean(input) {
    console.log(input ? "Yay!" : "Aww...");
}
// Ok
takesABoolean(true);
// Error: Argument of type 'string' is not
// assignable to parameter of type 'boolean'.
takesABoolean(betterName);
