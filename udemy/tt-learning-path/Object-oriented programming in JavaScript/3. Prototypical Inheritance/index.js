/**
 * Creating your own prototypical inheritance
 */
function Shape(color) {
    this.color = color
}

Shape.prototype.duplicate = function () { // defining a method in its parent
    console.log('duplicate')
}

function Circle(radius, color) {
    Shape.call(this, color)
    this.radius = radius
}

function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype)
    Child.prototype.constructor = Child
}

Circle.prototype = Object.create(Shape.prototype) // set Circle prototype as object shape, now each new object will inherit from Shape
// Note that Circle.prototype.constructor() === new Circle()
console.log(Circle.prototype.constructor) // logs Shape constructor
Circle.prototype.constructor = Circle // it is needed to reset the constructor, in the previous step circle constructor was reset to Shape
console.log(Circle.prototype.constructor) // logs Circle constructor

Circle.prototype.draw = function () {
    console.log('draw')
}

function Square(size) {
    this.size = size
}
extend(Square, Shape)

const shape = new Shape()
console.log(shape)
const circle = new Circle(1, 'blue')
console.log(circle)
circle.duplicate()

const square = new Square(2)
console.log(square)

/**
 * Method overriding
 */
Circle.prototype.duplicate = function() {
    console.log('Overriden duplicate')
}
circle.duplicate() // overriden duplicate

/**
 * Favor composition over inheritance
 * Mixin can be used
 */
function mixin(target, ...sources) {
    // Copies all the properties from all the source objects 
    // to the target object. 
    Object.assign(target, ...sources)
}

// Don't create large inheritance hierarchies. 
// One level of inheritance is fine. 

// Use mixins to combine multiple objects 
// and implement composition in JavaScript. 
const canEat = { 
    eat: function() {}
};

const canWalk = {
    walk: function() {}
};

function Person() {}

mixin(Person.prototype, canEat, canWalk);

const person = new Person()
console.log(person)

/**
 * Exercise Prototypical Inheritance
 */
function HtmlElement() {
    this.click = function() {
        console.log('clicked')
    }
}

HtmlElement.prototype.focus = function () {
    console.log('focued')
}

function HtmlSelectElement(items = []) {
    this.items = items

    this.addItem = function(item) {
        this.items.push(item)
    }

    this.removeItem = function(item) {
        this.items.splice(this.items.indexOf(item), 1)
    }
}

const e = new HtmlElement()
console.log(e)
