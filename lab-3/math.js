import {PI, E} from './consts.js'


export default function(a, b){
    return a + b
}

export const subtraction = (a, b) => {
    return a - b
    }
    
function multiplication(a, b) {
    return a * b
    }

function power(base, exponent){
    return base ** exponent
}

function circleArea(radius){
    return PI * power(radius, 2)
}

function exp(x){
    return power(E, x)
}

export {multiplication as mult}
export {power, circleArea, exp}
