//
// Object destructuring
//

/* const person = {
  age: 27,
  location: {
    city: 'Philadelphia',
    temp: 88
  }
};

const { name: firstName = 'Anonymous', age } = person;
console.log(`${name} is ${age}.`);

const {city, temp: temperature } = person.location;
if(city && temperature) {
  console.log(`It's ${temperature} in ${city}.`);
} */

/* const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin'
  }
};

const { name: publisherName = 'Self-Published' } = book.publisher;

console.log(publisherName); // Penguin, Self-Published */

//
// Array destructuring
//

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [street, city, state = 'New York', zip] = address;

console.log(`You are in ${city} ${state}`);