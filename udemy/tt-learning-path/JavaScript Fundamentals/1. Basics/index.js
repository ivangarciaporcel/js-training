/**
 * Variables
 * 
 * Cannot be a reserved keyword
 * Should be meaningful
 * Cannot start with a number (1name)
 * Cannot contain a space or hyphen (-)
 * Are case-sensitive (name != Name)
 */

let modifiableVar = 'initial value'
modifiableVar = 'second value'
console.log(modifiableVar)

/**
 * Constants
*/

const unmodifiableVar = 'final value'
// unmodifiableVar = 'other value' // will throw an error
console.log(unmodifiableVar)

/**
 * Javascript is dynamically typed
 */
 let variableOne = 'first value'
 console.log(typeof variableOne)
 variableOne = 1 // can change type at runtime
 console.log(typeof variableOne)
 console.log(variableOne)

/**
 * Primitive Types (Value types)
*/

let name = 'Ivan' // String Literal
let age = 32 // Number Literal
let isApproved = true // Boolean Literal
let firstName = undefined // undefined type
let selectedItem = null // null type, by using typeof it returns `object` instead which is a known bug in JS

/**
 * Reference Types
 *
 * Object
 * Arrays
 * Functions
 */

/** 
 * Object
 */
let objectOne = {
    fieldOne: 'Value',
    fieldSecond: 'Value 2',
    age // will be set as key:age
}
console.log(objectOne)
console.log(objectOne.fieldOne) // dot notation
console.log(objectOne['fieldOne']) // bracket notation

/**
 * Arrays (typeof = object)
 */
let colors = ['red', 'blue']
console.log(colors)
console.log(colors[0])
colors[2] = 'green' // dynamically add an element
console.log(colors)
colors[3] = 3 // array can have different types
console.log(colors)
console.log(colors.length) // as it is an object properties can be accessed with dot notation

/**
 * Functions (typeof = function)
 */
function greet(name) {
    name = 'Ivan Changed'
    console.log(`Welcome ${name}!`)
}
const userName = 'Ivan'
greet(userName)
console.log(userName) // variable is not modified as it was passed as primitive type

function modifyObject(objectOne) {
    objectOne['first'] = 2
}
let objectTest = {
    first: 1,
    second: 2
}
console.log(objectTest)
modifyObject(objectTest) // first property will be modified as it was passed as reference parameter
console.log(objectTest)

const es6Function = (name) => console.log(`Welcome ${name}!`)
es6Function(userName)