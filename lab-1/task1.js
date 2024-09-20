console.log('Задание 1: Создайте переменные для хранения информации о трех'+
    'пользователях (имя пользователя, его возраст и город проживания).\n'+
    'Используйте различные ключевые слова для определения переменных.\n'+
    'Выведите их значения в консоль.\nОбновите возраст первого пользователя.\n')

const user1 = ['Alex', 29, 'Moscow'];
var user2 = ['Basil', 35, 'Rostov'];
let user3 = ['Chelsie', 23, 'Boston'];

console.log(`usr1: ${user1}`)
console.log(`usr2: ${user2}`)
console.log(`usr3: ${user3}`)

user1[1] = 92

console.log(`usr1 age upd: ${user1}`)