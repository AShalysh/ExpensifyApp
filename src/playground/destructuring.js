// Object Destructuring
const person = {
    name: 'Anastasia',
    age: 21,
    location: {
        city: 'Montreal',
        temp: 2
    }
};
//ES6 syntax destructuring
const { name: firstName = 'Anonymous', age } = person;
// const name = person.name;
// const age = person.age;
console.log(`${firstName} is ${age}.`);

const { city, temp: temperature } = person.location;
console.log(`${temperature} is in ${city}.`);

const book = {
    name: 'Motherhood',
    author: 'Anastasia Sh',
    publisher: {
        name: 'Penguin'
    }
};

const { name: publisherName = 'Self-Published'} = book.publisher;
console.log(publisherName);

//Array Destructuring
const address = ['123 A Street', 'Montreal', 'QC', '12345'];
const [, , state = 'Buriatia'] = address;
console.log(`You are in ${state}.`);
//
const item = ['Coffee hot', '$2.00', '$2.50', '$3.00'];
const [itemName, , medium] = item;

console.log(`${itemName} costs ${medium}`);
