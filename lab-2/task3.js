console.log('\ntask 3\n')
let list = ['Lorem', 'ipsum', 'dolor', 42, 52]
console.log('list', list)
console.log(`first element: ${list[0]}`)
console.log(`last element: ${list[list.length-1]}`)
list[1] = 'dolor'
console.log('updated list', list)

let listCopy = list.slice()
console.log('list:', list)
console.log('listCopy:', listCopy)

function mergeLists(list1, list2){
    //let res = list1.concat(list2)
    let res = []
    for (item of list1){res.push(item)}
    for (item of list2){res.push(item)}
    return res
}

console.log('mergeLists([1, 2, 3], [4, 5]):', mergeLists([1, 2, 3], [4, 5]))

let users = [{name: 'efrosim'}, {name: 'tirion'}, {name: 'tarvarrs'}]

function produceUsernames(usernames){
    let names = []
    for (user of usernames){
        names.push(user.name)
    }
    return names
}
console.log('users:', users)
console.log('produceUsernames(users):', produceUsernames(users))


function average(numbers){
    sum = 0
    cnt = numbers.length
    for (number of numbers){
        sum += number
    }
    return sum/cnt
}

console.log('average([1, 2, 3, 4, 5]):', average([1, 2, 3, 4, 5]))
