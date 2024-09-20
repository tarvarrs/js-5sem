console.log('Задание 3: Напишите программу, которая находит среди трех чисел наибольшее, \n'+
    'используя логические условия.\n')

function find_max_num(a, b, c){
    max_number = a

    if (b >= a && b >= c){
        max_number = b
    }else if (c >= a && c >= b){
        max_number = c
    }

    return max_number
} 

console.log(`find_max_num(3, 2, 1): ${find_max_num(3, 2, 1)}`)
console.log(`find_max_num(1, 3, 2): ${find_max_num(1, 3, 2)}`)
console.log(`find_max_num(1, 2, 3): ${find_max_num(1, 2, 3)}`)
console.log(`find_max_num(2, 1, 1): ${find_max_num(2, 1, 1)}`)
console.log(`find_max_num(1, 2, 1): ${find_max_num(1, 2, 1)}`)
console.log(`find_max_num(1, 1, 2): ${find_max_num(1, 1, 2)}`)
