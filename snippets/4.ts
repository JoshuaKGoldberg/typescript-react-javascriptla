function takesNameMaybe(nameMaybe: string | undefined) {
    // Error: Object is possibly 'undefined'.
    console.log(nameMaybe.length);

    if (nameMaybe) {
        // This is ok, because it must exist
        console.log(nameMaybe.length);
    }
}

function takesNumberOrString(either: number | string) {
    if (typeof either === "number") {
        // Inside this if, we know it's a number
        console.log(either.toFixed());
    } else {
        // Inside this else, we know it's a string
        console.log(either.length);
    }

    // Outside, we know neither of those things :(
    // We can't access properties that exist only one one or the other...

    // Error: Property 'toFixed' does not exist on type 'string | number'.
    //   Property 'toFixed' does not exist on type 'string'.
    console.log(either.toFixed());

    // Error: Property 'length' does not exist on type 'string | number'.
    //   Property 'length' does not exist on type 'number'.
    console.log(either.length);

    // ...but we can access properties that exist on both!
    console.log(either.toString());
}
