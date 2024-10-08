// INSTRUCTIONS: In this exercise, you'll practice using a for loop to aggregate information from objects within an array.
// The arrays will be provided for you. Your task is to write the code to aggregate information from these arrays and log it to the console.

// EXAMPLE 1:
// const exampleBooks = [];
// exampleBooks.push({ title: 'The Hobbit', author: 'J.R.R. Tolkien' });
// exampleBooks.push({ title: '1984', author: 'George Orwell' });
// exampleBooks.push({ title: 'Moby Dick', author: 'Herman Melville' });

// let bookTitles = '';
// for (let i = 0; i < exampleBooks.length; i++) {
//     bookTitles += exampleBooks[i].title;
//     bookTitles += ', ';
// }
// console.log('Book Titles:', bookTitles);

const books = [];
books.push({ title: 'Politically Correct Bedtime Stories', author: 'James Finn Garner' });
books.push({ title: 'Primary Colors', author: 'Joe Klein' });
books.push({ title: 'Peyton Place', author: 'Grace Metalious' });

let bookTitles = '';
for (let i = 0; i < books.length; i++) {
    bookTitles += books[i].title;
    bookTitles += ', ';
}
console.log('Book Titles:', bookTitles);

// EXAMPLE 2:
// const exampleCountries = [];
// exampleCountries.push({ name: 'Japan', population: 126476461 });
// exampleCountries.push({ name: 'Brazil', population: 212559417 });
// exampleCountries.push({ name: 'Germany', population: 83783942 });

// let countryNames = '';
// for (let i = 0; i < exampleCountries.length; i++) {
//     countryNames += exampleCountries[i].name;
//     // Note: to prevent the final comma, you can test for whether it is the last one with a conditional
//     if (i < exampleCountries.length - 1) {
//         countryNames += ', ';
//     }
// }
// console.log('Country Names:', countryNames);


// EXERCISE 1: Aggregating First Names
// INSTRUCTIONS: Use a for loop to aggregate all the `firstName` values into a single string, separated by commas.
// BONUS: don't add a comma to very last item
// Log the resulting string to the console.

const people = [];
people.push({ firstName: 'John', lastName: 'Doe' });
people.push({ firstName: 'Jane', lastName: 'Smith' });
people.push({ firstName: 'Emily', lastName: 'Johnson' });

let firstNamesString = '';

for (let i = 0; i < people.length; i++) {
    firstNamesString += people[i].firstName;
    if (i < people.length - 1) {
        firstNamesString += ', ';
    }
}

console.log(firstNamesString);

// TODO: Write your code here to aggregate the first names from the `people` array.


// EXERCISE 2: Aggregating Last Names
// INSTRUCTIONS: Use a for loop to aggregate all the `lastName` values into a single string, separated by commas.
// BONUS: don't add a comma to very last item
// Log the resulting string to the console.

const employees = [];
employees.push({ firstName: 'Alice', lastName: 'Brown' });
employees.push({ firstName: 'Bob', lastName: 'White' });
employees.push({ firstName: 'Charlie', lastName: 'Green' });

// TODO: Write your code here to aggregate the last names from the `employees` array.

let lastNamesString = '';

for (let i = 0; i < employees.length; i++) {
    lastNamesString += employees[i].lastName;
    if (i < employees.length - 1) {
        lastNamesString += ', ';
    }
}

console.log(lastNamesString);

// EXERCISE 3: Aggregating Product Names
// INSTRUCTIONS: Use a for loop to aggregate all the `productName` values into a single string, separated by commas.
// Log the resulting string to the console.

const products = [];
products.push({ productName: 'Laptop', price: 1000 });
products.push({ productName: 'Smartphone', price: 800 });
products.push({ productName: 'Tablet', price: 600 });

// TODO: Write your code here to aggregate the product names from the `products` array.

let productNamesString = '';

for (let i = 0; i < products.length; i++) {
    productNamesString += products[i].productName;
    if (i < products.length - 1) {
        productNamesString += ', ';
    }
}

console.log(productNamesString); // Output: "Laptop, Smartphone, Tablet"

// EXERCISE 4: Aggregating Task Descriptions
// INSTRUCTIONS: Use a for loop to aggregate all the `description` values into a single string, separated by commas.
// Log the resulting string to the console.

const tasks = [];
tasks.push({ description: 'Complete assignment', dueDate: '2024-08-20' });
tasks.push({ description: 'Attend meeting', dueDate: '2024-08-21' });
tasks.push({ description: 'Submit report', dueDate: '2024-08-22' });

let descriptionsString = '';

for (let i = 0; i < tasks.length; i++) {
    descriptionsString += tasks[i].description;
    
    if (i < tasks.length - 1) {
        descriptionsString += ', ';
    }
}

console.log(descriptionsString);






// EXERCISE 5: Aggregating animal sounds
const exampleAnimals = [];
exampleAnimals.push({ species: 'Dog', sound: 'Bark' });
exampleAnimals.push({ species: 'Cat', sound: 'Meow' });
exampleAnimals.push({ species: 'Cow', sound: 'Moo' });

// TODO: Write your code here to aggregate the animal sounds.

let soundsString = '';

for (let i = 0; i < exampleAnimals.length; i++) {
    soundsString += exampleAnimals[i].sound;

    if(i < exampleAnimals.length - 1) {
        soundsString += ', ';
    }
}

console.log("Hello World");
console.log(soundsString);

// Great job! You've completed the exercises.
// These exercises should have helped you practice using for loops to aggregate information from objects in arrays.
// Continue to experiment by creating more arrays and aggregating different types of information!
