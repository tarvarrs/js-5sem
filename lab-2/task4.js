console.log('\ntask 4\n')

let names = ['Ann', 'Bill', 'Dave', 'Evan']
let set = new Set(names)
console.log('set: ',set)

let firstAdded = names[0]
set.delete(firstAdded)

console.log('first added in set:',set.has(firstAdded))
console.log('size:', set.size)
