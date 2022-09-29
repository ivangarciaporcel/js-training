/**
 * Functions
 */

/**
 * Function declaration vs expressions
 */

// Function declaration
function walk() {
    console.log('walk')
}

// Named Function expression
let run = function run() {
    console.log('run')
}
run()

// Anonymous Function expression
let jump = function () {
    console.log('jump')
}
jump()
let anotherJump = jump // assign a function to a variable
anotherJump()

/**
 * Hoisting
 * 
 * Process of moving function declarations to the top, it is done by js engine
 */
walk2() // it can be called as it was mentioned its declaration was moved to the top
function walk2() {
    console.log('walk2')
}

// run2() // It throws a ReferenceError: Cannot access 'run2' before initialization
let run2 = function run2() {
    console.log('run2')
}

/**
 * Arguments
 * 
 * It can be used to access function arguments
 */
function sum() {
    let total = 0
    console.log(arguments) // will print Symbol.iterator
    for (let value of arguments) {
        total += value
    }
    return total
}

console.log(sum(1)) // 1
console.log(sum(1, 2, 3, 4, 5)) // 15

/**
 * The Rest Operator (...val)
 * 
 * It must be the last parameter of a function
 */
function sum2(nameUser, ...args) {
    console.log(nameUser)
    console.log(args) // will print an array [1,2,3,4,5]
    return args.reduce((a, b) => a + b)
}
console.log(sum2('Ivan', 1, 2, 3, 4, 5)) // 15

/**
 * Default Parameters
 */
function defParams(a = 1, b = 2) {
    return a + b
}

console.log(defParams()) // 3
console.log(defParams(2)) // 4
console.log(defParams(2, 3)) // 5

/**
 * Getters and Setters
 */
let person = {
    firstName: 'Ivan',
    lastName: 'Garcia',
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    },
    set fullName(value) {
        const parts = value.split(' ')
        this.firstName = parts[0]
        this.lastName = parts[1]
    }
}

console.log(person.fullName)
person.fullName = 'John Smith'
console.log(person.fullName)

/**
 * Try and Catch
 */
// person.fullName = true // it will throw a TypeError as the code is trying to split a boolean
// person.fullName = null // it will throw a TypeError as the code is trying to split a null value

person = {
    firstName: 'Ivan',
    lastName: 'Garcia',
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    },
    set fullName(value) {
        let parts
        try {
            parts = value.split(' ')
        }
        catch (e) {
            parts = ['Default', 'Name']
        }
        this.firstName = parts[0]
        this.lastName = parts[1]
    }
}
person.fullName = true // it will try to split a boolean but the error will be caught by the try catch block
console.log(person.fullName) // it will print the Default Name

/**
 * Local vs Global Scope
 * 
 * It is a good practice not to define global variables
 */
{
    const message = 'hi' // defined in internal scope
}
// console.log(message) // it will throw a ReferenceError, which is defined inside the curly braces block
function start() {
    const message = 'hi' // scope of this constant limited to the function
}
// console.log(message) // it will throw a ReferenceError, which is defined inside the function
const globalMessage = 'I am global'
function globalFunction() {
    console.log(globalMessage) // it access global variable called globalMessage
}
globalFunction()

/**
 * Let vs Var
 * 
 * var => function-scope
 * ES6: let,const => block-scoped
 */
function iterate() {
    for (let i = 0; i < 5; i++) {
        console.log(i)
    }
    // console.log(i) // it will throw an error as i is defined inside the scope of the for
}

function iterate2() {
    for (var i = 0; i < 5; i++) {
        console.log(i)
    }
    console.log(i) // it will work, as with var the scope is not limited to the block but to the function, AVOID the use of it.
}
iterate2()

// global variables
var color = 'red' // it is attached to the window object, to avoid colission with other variables in other libraries AVOID the use of it.
console.log(window.color) // red
let age = 30 // it is not attached to the window object
console.log(window.age) // undefined

function sayHi() { // this function is attached to the window object as well
    console.log('hi')
}
window.sayHi() // in order to prevent it we should use ES6 modules.

/**
 * Keyword 'this'
 * 
 * It references the object that executes the current function
 */

// 1. In a method this references the object which contains it
const video = {
    title: 'a',
    play() {
        console.log(this) // this references the object itself
    }
}
video.play() // it prints video object

// 2. In a function this references the global object (window in html, global in node)
function playVideo() {
    console.log(this)
}
playVideo() // it prints window object

// when using a constructor object this references to the object which contains it
function VideoConstructor(title) {
    this.title = title
    console.log(this)
}

// when using 'new' keyword js creates a new object which will make 'this' reference it
const v = new VideoConstructor('constructor') // it prints the VideoConstructor object

// 3. Using a function inside an object references to the global object (window)
const tape = {
    title: 'a',
    tags: [1, 2, 3],
    showTags() {
        this.tags.forEach(function (tag) {
            console.log(this, tag) // 'this' will print window object!, it happens because it is inside a regular anonymous function declaration
        })
    }
}
tape.showTags()

const tape2 = {
    title: 'a',
    tags: [1, 2, 3],
    showTags() {
        this.tags.forEach(function (tag) {
            console.log(this, tag)
        }, this) // second parameter of forEach 'thisArg' which will reference tape2 object
    }
}
tape2.showTags()

/**
 * Changing 'this'
 * 
 * Following the previous example we can set 'this' value to another variables
 */
const tape3 = {
    title: 'a',
    tags: [1, 2, 3],
    showTags() {
        const that = this
        this.tags.forEach(function (tag) {
            console.log(that, tag) // that references tape3 object
        })
    }
}
tape3.showTags()

// Use 'call' and 'apply' method to change object a function references to
function referenceObj(a, b) {
    console.log(this, a, b)
}


referenceObj.call({ name: 'Ivan' }, 1, 2) // prints as 'this' newly created object with name Ivan
referenceObj.apply({ name: 'Ivan' }, [1, 2]) // prints as 'this' newly created object with name Ivan

const newFn = referenceObj.bind({ name: 'Ivan' }, 1, 2)
newFn() // prints as 'this' newly created object with name Ivan
referenceObj() // prints window object

const tape4 = {
    title: 'a',
    tags: [1, 2, 3],
    showTags() {
        this.tags.forEach(function (tag) {
            console.log(this, tag) // that references tape4 object
        }.bind(this)) // it binds to tape4 object
    }
}
tape4.showTags()

const tape5 = {
    title: 'a',
    tags: [1, 2, 3],
    showTags() {
        this.tags.forEach(tag => {
            console.log(this, tag) // that references tape5 object, because in an arrow function 'this' is inherited from the containing function
        })
    }
}
tape5.showTags()

/**
 * Sum of Arguments
 */
function sumExercise(...args) {
    if (args.length === 1 && Array.isArray(args[0])) {
        args = [...args[0]]
    }
    return args.reduce((a, b) => a + b)
}

console.log(sumExercise(1, 2, 3, 4, 5)) // 15
console.log(sumExercise([1, 2, 3, 4, 5])) // 15

/**
 * Area of Circle
 */
const circle = {
    radius: 1,
    get area() {
        return Math.PI * Math.pow(this.radius, 2)
    }
}

circle.radius = 3
circle.area = 2 // will not change anything as area is a read-only value
console.log(circle.area)

/**
 * Error handling
 */
function nOcurrences(array, searchElement) {
    if (!Array.isArray(array)) {
        throw new Error('Invalid array.')
    }
    return array.reduce((acc, current) => {
        const occurrence = current === searchElement ? 1 : 0
        return acc + occurrence
    }, 0)
}

const nArray = [1, 2, 3, 4, 2]
try {
    let count = nOcurrences(nArray, 2)
    console.log(count)
    // count = nOcurrences(true, 2) // it will throw an alert as a boolean is sent to method 'nOcurrences' instead of an array
    // console.log(count)
}
catch (e) {
    alert(e)
}
