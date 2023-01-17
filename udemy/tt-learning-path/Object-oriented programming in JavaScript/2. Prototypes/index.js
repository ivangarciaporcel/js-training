/**
 * Prototype and Prototypical inheritance
 * 
 * Prototype is just a regular object!
 */
// Prototype does not have a parent
// every object created in Javascript inherits from Prototype
let x = {} // by inspecting in the console it is seen that it inherits from prototype
let y = {}

console.log(Object.getPrototypeOf(x))
console.log(Object.getPrototypeOf(x) === Object.getPrototypeOf(y)) // they both reference/inherit same property object

console.log(x.toString()) // default output: [object Object], it calls parent's toString method

/**
 * Multi-level inheritance
 */
let myArray = []
console.log(myArray) // it also inherits from prototype, but this is a prototype array
// Prototype object <-- Prototype array <-- myArray

// Objects created by a given constructor will have the same property
function Circle(radius) {
    this.radius = radius

    this.draw = function () {
        console.log('draw')
    }
}

const circle = new Circle(10)
console.log(circle) // in the logs it can be seen that circle inherits a prototype object with constructor Circle, which also inherits a Prototype object
// Prototype object <-- Prototype Circle <-- circle

/**
 * Property descriptors
 */
let person = {
    name: 'Ivan'
}
console.log(person)

for (let key in person) { // it will print only property 'name', it does not print inherited properties from Protoype
    console.log(key)
}
console.log(Object.keys(person)) // it will print only name as well

// properties are not printed as they are not enumerable, let's take a look at method toString from parent Prototype
let objectBase = Object.getPrototypeOf(person)
let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString')
console.log(descriptor)
/* it will print:
{
    "writable": true, // it can be overriden
    "enumerable": false, // it is the reason why it is not printed
    "configurable": true // it can be deleted
}
*/

Object.defineProperty(person, 'name', {
    writable: false,
    enumerable: false,
    configurable: false
})
person.name = 'Roberto'
console.log(person) // Name is still displayed as Ivan, as this property was defined as writable some lines above
console.log(Object.keys(person)) // it prints an empty array, as property name was set as not enumerable
delete person.name // trying to delete property name
console.log(person) // name is still being displayed as property was defined as not configurable some lines above

/**
 * Constructor Prototypes
 */
const circle2 = new Circle(2)
console.log(circle2.__proto__) // it will print the parent Prototype which constructor is Circle(radius)
console.log(circle2.__proto__.__proto__) // it will print the parent Prototype which constructor is Object()

/**
 * Prototype vs Instance members
 * 
 * Using the example of Circle constructor, if we log variables circle and circle2 in the console we will see that both
 * has its own 'draw' function, which makes create a draw function in memory for each circle instantiated.
 * There is a way to have only one draw method defined and used by several circles:
 */
function CircleImproved(radius) {
    // Instance members
    this.radius = radius

    this.move = function () {
        console.log('move')
    }

    this.move2 = function () {
        this.draw() // referencing a prototype method inside an instance member
        console.log('move2')
    }
}

// Prototype members
CircleImproved.prototype.draw = function () {
    this.move() // referencing an instance method inside a prototype member
    console.log('draw')
}

const circleImproved1 = new CircleImproved(1)
const circleImproved2 = new CircleImproved(2)
// Now after printing both circles it can be seen that draw method is defined at the level of Prototype, it is inherited
console.log(circleImproved1)
console.log(circleImproved2)

console.log(circleImproved1.toString()) // [Object object]
console.log(circleImproved2.toString()) // [Object object]
// Overriding toString method
CircleImproved.prototype.toString = function () {
    return `Circle with radius ${this.radius}`
}
console.log(circleImproved1.toString()) // Circle with radius 1
console.log(circleImproved2.toString()) // Circle with radius 2

circleImproved1.draw() // will print move-draw
circleImproved1.move2() // will print move-draw-move2

/**
 * Iterating instance and prototype members
 */

// it only iterates instance members
console.log(Object.keys(circleImproved1)) // will print radius, move, and move2

// it returns all members (instance + prototype)
for (let key in circleImproved1) console.log(key) // radius, move, move2, draw, toString

// in JS sometimes `instance members` are referred as `own members`
console.log(circleImproved1.hasOwnProperty('radius')) // true
console.log(circleImproved1.hasOwnProperty('draw')) // false

/**
 * Avoid extending the built-in objects
 * 
 * Don't modify objects you don't own
 */
Array.prototype.suffle = function () { // AVOID THIS!!!
    // .. new algorithm
}

const array = []
array.suffle() // YOU SHOULD NOT MODIFY BUILT-IN OBJECTS AND METHODS!!!

/**
 * Prototype exercise
 * 
 * Add methods of the following stopwatch to prototype
 */
function Stopwatch() {
    let startTime, endTime, running, duration = 0

    this.start = function () {
        if (running) {
            throw new Error('already started')
        }
        running = true
        startTime = new Date()
    }

    this.stop = function () {
        if (!running) {
            throw new Error('already stopped')
        }
        running = false
        endTime = new Date()
        const seconds = (endTime.getTime() - startTime.getTime()) / 1000
        duration += seconds
    }

    this.reset = function () {
        startTime = null
        endTime = null
        running = false
        duration = 0
    }

    Object.defineProperty(this, 'duration', {
        get: function () {
            return duration
        }
    })
}

function StopwatchSolution() {
    let startTime, endTime, running, duration = 0

    Object.defineProperty(this, 'duration', {
        get: function () { return duration }
    })
    Object.defineProperty(this, 'startTime', {
        get: function () { return duration }
    })
    Object.defineProperty(this, 'endTime', {
        get: function () { return duration }
    })
    Object.defineProperty(this, 'running', {
        get: function () { return duration }
    })
}
StopwatchSolution.prototype.start = function () {
    if (this.running) {
        throw new Error('already started')
    }
    this.running = true
    this.startTime = new Date()
}
StopwatchSolution.prototype.stop = function () {
    if (!this.running) {
        throw new Error('already stopped')
    }
    this.running = false
    this.endTime = new Date()
    const seconds = (this.endTime.getTime() - this.startTime.getTime()) / 1000
    this.duration += seconds
}

StopwatchSolution.prototype.reset = function () {
    this.startTime = null
    this.endTime = null
    this.running = false
    this.duration = 0
}

StopwatchSolution.prototype.getDuration = function () {
    return this.duration
}

const sw = new StopwatchSolution()