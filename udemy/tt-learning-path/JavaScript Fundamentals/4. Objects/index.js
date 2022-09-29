/**
 * Objects
 */
const circle = {
    // properties
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    // methods
    draw: () => console.log('draw')
}
circle.draw()

/**
 * Factory Functions
 */
const factoryFunction = (radius) => {
    return {
        radius,
        draw() {
            console.log(`draw with radius ${radius}`)
        }
    }
}
const circleOne = factoryFunction(1)
circleOne.draw()
const circleTwo = factoryFunction(2)
circleTwo.draw()

/**
 * Constructor Functions
 * it uses Pascal notation as convention
 */
function Circle(radius) {
    this.radius = radius
    this.draw = function () {
        console.log('draw')
    }
}

const circleConst = new Circle(2)
console.log(circleConst)

/**
 * Dyamic nature of objects
 */
let obj = {
    prop: 1
}
console.log(obj)
obj.prop2 = '2' // dynamically added another property
console.log(obj)
delete obj.prop2 // delete recent added property
console.log(obj)

/** 
 * Constructor property
 * 
 * every object has a `constructor property`, check the difference between them
 */
console.log(circleOne.constructor) // logs an object constructor
console.log(circleConst.constructor) // logs a Circle constructor

/**
 * Functions are objects
 */
console.log(Circle.name)
console.log(Circle.length)
console.log(Circle.constructor) // Function() constructor
Circle.call({}, 1) // equivalent at using new Circle(1)
Circle.apply({}, [1])

// JS create a function under the hood as it follows (taking example of function Circle)
const Circle1 = new Function('radius', `
    this.radius = radius
    this.draw = function() {
        console.log('draw')
    }
`)

const another = new Circle1(1)
console.log(another)

/**
 * Value vs Reference Types
 * 
 * Primities are copied by their value
 * Objects are copied by their reference
 */
let x = 10
let y = x
x = 5
console.log(x) // 5
console.log(y) // 10

x = { prop: 1}
y = x
x.prop = 2
console.log(x) // prop: 2
console.log(y) // prop: 2

let number = 10
const increase = (number) => number++
increase(number)
console.log(number) // 10, it was not increased as number was passed as its value

obj = {value: 1}
const increaseObj = (obj) => obj.value++
increaseObj(obj)
console.log(obj) // obj.value = 2 as obj was passed by its reference

/**
 * Enumerating properties of an object
 */
const objCircle = {
    radius: 1,
    draw() {
        console.log('draw')
    }
}

for(let key in objCircle) {
    console.log(key, objCircle[key])
}

for(let key of Object.keys(objCircle)) {
    console.log(key, objCircle[key])
}

for(let entry of Object.entries(objCircle)) {
    console.log(entry)
}

if('radius' in objCircle) { // check if property exists in object
    console.log('Yes, radius is present in object')
}

/**
 * Cloning an object
 */
const cloneObj = Object.assign({ extraProp: 'val'}, objCircle)
console.log(cloneObj) // copy of objCircle plus extra property

// using spread operator
const anotherObj = {...objCircle}
console.log(anotherObj)

/**
 * Strings
 */

// String primitive
const sPrim = 'hi'
console.log(typeof sPrim) // string
sPrim.charAt(0) // method can be used as JS internally wraps it with String object

// String object
const sObj = new String('hi')
console.log(typeof sObj) // object

/**
 * Template literals
 */
const userName = 'Ivan'
const text = `This is
my first message 'Hello world ${userName}'.

Regards`
console.log(text)

/**
 * Date
 */
const now = new Date()
console.log(now)
const date1 = new Date('Sep 01 2022 21:00')
console.log(date1)
const date2 = new Date(2022, 0, 11, 21, 1)
console.log(date2)

console.log(now.getMilliseconds())
console.log(now.toISOString())

/**
 * Exercise: Address Object
 */
const addressFactory = (street, city, zipCode) => {
    return {
        street,
        city,
        zipCode
    }
}

function Address(street, city, zipCode) {
    this.street = street
    this.city = city
    this.zipCode = zipCode
}

function showAddress(address) {
    for(let entries of Object.entries(address)) {
        console.log(entries)
    }
}

const factAddress = addressFactory('1', '2', '3')
showAddress(factAddress)
const address = new Address('a', 'b', 'c')
showAddress(address)

/**
 * Exercise: Object Equality
 */
 const address2 = new Address('a', 'b', 'c')

 function areEqual(address1, address2) {
    return address1.street === address2.street && address1.city === address2.city && address1.zipCode === address2.zipCode
 }

 function areSame(address1, address2) {
    return address1 === address2
 }

 console.log(areEqual(address, address2)) // true
 console.log(areSame(address, address2)) // false

 /**
  * Exercise: Blog Post Object
  */
 const postObject = {
    title: '1',
    body: '2',
    author: '3',
    views: 2,
    comments: [
        {
            author: '1',
            body: '2'
        },
        {
            author: '2',
            body: '3'
        }
    ],
    isLive: false
 }
 console.log(postObject)

 const PostObject = function(title, body, author) {
    this.title = title
    this.body = body
    this.author = author
    this.views = 0
    this.comments = []
    this.isLive = false
 }
const postObject1 = new PostObject('1', '2', '3')
console.log(postObject1)

/**
 * Exercise: Price Range Objects
 */
const priceRanges = [
    {
        id: 1,
        label: 'Low',
        image: 'imagePath',
        isActive: true,
        minPerson: 0,
        maxPerson: 10,
    },
    {
        id: 2,
        label: 'Medium',
        image: 'imagePath',
        isActive: true,
        minPerson: 11,
        maxPerson: 20,
    },
    {
        id: 3,
        label: 'High',
        image: 'imagePath',
        isActive: true,
        minPerson: 21,
        maxPerson: 30,
    }
]
console.log(priceRanges)