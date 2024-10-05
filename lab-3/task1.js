class calcError extends Error{
    constructor(msg){
        super(msg);
        this.name = 'CalcError';
    }
}

function calc(a, b, operation){
    try{
        let res;
        switch(operation){
            case '+':
                result = a + b;
                break;
            case '-':
                result = a - b;
                break;
            case '*':
                result = a * b;
                break;
            case '/':
                result = a / b;
                break;
            default:
                return ('Error: no such operation.');
                break;
        };
        if (isNaN(result)){
            throw new calcError('Result is not a number.')
        }
        if (!isFinite(result)){
            throw new calcError('Result is infinity.')
        }
        return result
    } catch(err) {
        return err
    }
}

console.log('Task 1')

console.log(calc(1, 2, '+'))
console.log(calc('1', '2', '+'))
console.log(calc('1', '2', '-'))
console.log(calc('1', '2', '*'))
console.log(calc('1', '2', '/'))

console.log(calc(1, 2, 'foo'))

console.log(calc('a', 'a', '+'))
console.log(calc('a', 'a', '-'))
console.log(calc('a', '5', '+'))

console.log(calc(5, 0, '/')) // infinity
