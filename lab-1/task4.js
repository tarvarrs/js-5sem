console.log('Задание 4: Напишите программу, которая выводит числа от 1 до 10 \n'+
    'с помощью различных циклов: while, do...while, for.\n')

curr_num = 1

while (curr_num <= 10){
    console.log(curr_num)
    curr_num ++
}

console.log()
curr_num = 1

do {
    console.log(curr_num)
    curr_num ++
} while (curr_num <= 10)

console.log()

for (let i = 1; i <= 10; i++){
    console.log(i)
}