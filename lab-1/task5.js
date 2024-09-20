console.log('Задание 5: Cоздайте функцию, которая принимает два аргумента,\n'+
    'выполняет над ними математическую операцию и возвращает ее результат.\n'+
    'Используйте три различных синтаксиса описания функции.\n')

let addition = function(a, b){
    let res = a + b
    return res
    }
    
let subtraction = (a, b) => {
        let res = a - b
        return res
    }
    
function multiplication(a, b) {
        let res = a * b
        return res
    }

console.log(`addition(2, 3): ${addition(2, 3)}`)
console.log(`subtraction(6, 4): ${subtraction(6, 4)}`)
console.log(`multiplication(7, 3): ${multiplication(7, 3)}`)