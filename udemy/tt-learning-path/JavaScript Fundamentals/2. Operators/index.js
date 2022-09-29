/**
 * Arithmetic Operators + - * /
 * i++
 * i--
 */

/**
 * Assignment Operators 
 * =
 * i+=1
 */

/**
 * Comparison Operators
 * < > == <= >= === != !==
 */

/** 
 * Equality Operators
 */

// Strict equality (Type + Value)
console.log(1 === 1) //true
console.log('1' === 1) // false

// Lose Equality
console.log(1 == 1) // true
console.log('1' == 1) // true
console.log(true == 1) // true

/** 
 * Ternary Operators
 */
let number = 1
console.log(number > 2 ? 'greater': 'lower')

/** 
 * Logical Operators with Non-booleans
 * &&, ||, NOT(!)
 */ 
let val1 = true
let val2 = false
console.log(val1 && val2) // false

/** 
 * Logical Operators with Non-Booleans
 */ 

 // Falsy: undefined, null, 0, false, '', NaN
 console.log(false || NaN) // NaN

 // Truthy: anything that is not falsy
 console.log(false || 'Ivan') // Ivan
 console.log(false || 'Ivan' || 'Whatever') // Ivan

 // Short-circuiting
 let userColor = undefined
 let defaultColor = 'blue'
 let currentColor = userColor || defaultColor
 console.log(currentColor) // blue

/**
 * Operators precedence
 * 
 * PEMDAS: (, exp, *, /, +, -
 */
console.log(2 + 3 * 4) // 14

/**
 * Swapping variables without using extra variable
 */
let a = 3
let b = 5
console.log(`${a} ${b}`)
a+=b
b=a-b
a-=b
console.log(`${a} ${b}`)