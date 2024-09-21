console.log('task 1\n')
let user1 = {name: 'Mary', age: 28, city: 'London'};

console.log('user1:');
console.log(user1)

user1.age = 29
user1.height = 170;
delete user1.city;

console.log('user1:');
console.log(user1)

let user2 = {name: 'Mandy', age: 18, city: 'London'};
console.log('user2:');
console.log(user2)

console.log(`ages sum: ${user1.age + user2.age}`)
