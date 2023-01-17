/**
 * Private properties and methods
 */
function Circle(radius) {
    this.radius = radius
    let defaultLocation = { x: 0, y: 0 } // to hide to the outside we declare as local variable

    let computeOptimumLocation = function (factor) {
        //...
    }

    this.draw = function () {
        computeOptimumLocation(0.1) // it can be accessed because of closure, parent defined variables and methods are accessible here
        console.log('draw')
    }
}

const circle = new Circle(10)
circle.draw()

/**
 * Getters and setters
 */
function Circle2(radius) {
    this.radius = radius
    let defaultLocation = { x: 0, y: 0 }

    this.draw = function () {
        console.log('draw')
    }

    Object.defineProperty(this, 'defaultLocation', {
        get: function () { // define getter for private property defaultLocation
            return defaultLocation
        },
        set: function (value) { // define setter for private property defaultLocation
            if (!value.x || !value.y) {
                throw new Error('Invalid ocation.')
            }
            defaultLocation = value
        }
    })
}

const circle2 = new Circle2(10)
console.log(circle2.defaultLocation)
// circle2.defaultLocation = 1 // will throw an error as it is validated in set method
circle2.draw()

/**
 * Exercise - Stop Watch
 * 
 * Define a stop watch which can be started, stopped, restarted and displaying the time it has been started
 */
function Stopwatch() {
    let started = false
    let initDate = null

    this.start = function() {
        if(started) {
            throw new Error('already started')
        }
        started = true
        initDate = new Date()
    }

    this.stop = function() {
        if(!started) {
            throw new Error('already stopped')
        }
        started = false
        console.log(new Date() - initDate)
        initDate = null
    }

    this.reset = function() {
        started = true
        initDate = new Date()
    }
}

function StopwatchSolvedByInstructor() {
    let startTime, endTime, running, duration = 0

    this.start = function() {
        if(running) {
            throw new Error('already started')
        }
        running = true
        startTime = new Date()
    }

    this.stop = function() {
        if(!running) {
            throw new Error('already stopped')
        }
        running = false
        endTime = new Date()
        const seconds = (endTime.getTime() - startTime.getTime()) / 1000 
        duration += seconds
    }

    this.reset = function() {
        startTime = null
        endTime = null
        running = false
        duration = 0
    }

    Object.defineProperty(this, 'duration', {
        get: function() {
            return duration
        }
    })
}
const sw = new Stopwatch()
const sw2 = new StopwatchSolvedByInstructor()