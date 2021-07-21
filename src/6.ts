interface Person {
    greet: () => void;
    name: string;
}

let spongebob: Person = {
    greet: () => {
        console.log("I'm ready!");
    },
    name: "Spongebob",
};

function logPerson(person: Person) {
    console.log(`${person.name} says:`);
    person.greet();
}

// This is allowed because spongebob is known to be of type 'Person'.
logPerson(spongebob);

const patrick = {
    greet: () => {
        console.log("It's first grade, Spongebob.");
    },
    name: "Patrick",
};

// This is also allowed; 'patrick' structurally matches.
logPerson(patrick);

const plankton = {
    announce: () => {
        console.error("I will destroy all of you!");
    },
    name: "Plankton"
};

// This is not allowed because plankton doesn't structurally match.
// Error: Argument of type '{ announce: () => void; name: string; }'
// is not assignable to parameter of type 'Person'.
//   Property 'greet' is missing in type '{ announce: () => void; name: string; }'
//   but required in type 'Person'.
logPerson(plankton);
