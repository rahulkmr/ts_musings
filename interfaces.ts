function printLabel(labelledObj: { label: string }) {
    console.log(labelledObj.label)
}

let myObj = {size: 10, label: 'Size 10 object'}
printLabel(myObj)

interface Labelled {
    label: string
}

function printo(labelledObj: Labelled) {
    console.log(labelledObj.label)
}

printo(myObj)


interface SquareConfig {
    color?: string
    width?: number
}

interface Square {
    color: string
    area: number
}


function createSquare(config: SquareConfig): Square {
    const newSquare = {
        color: config.color || 'white',
        area: config.width ? config.width * config.width : 100,
    }
    return newSquare
}

let mySquare = createSquare({color: 'black'})

interface Point {
    readonly x: number
    readonly y: number
}

let p1 = { x: 10, y: 20 }

let arr = [1, 2, 3, 4]
let ro: ReadonlyArray<number> = arr


interface Person {
    name: string
    age: number
    [propName: string]: any
}


interface SearchFunc {
    (source: string, subString: string): boolean
}

const mySearch: SearchFunc = (source, subString) => {
    let index = source.search(subString)
    return index > -1
}


interface StringArray {
    [index: number]: string
}

let myArray = ["Bob", "Fred"]
let myStr = myArray[0]


class Animal {
    name: string = ''
}

class Dog extends Animal {
    breed: string = ''
}

interface Indexer {
    [x: string]: Animal
    [x: number]: Dog
}

interface NumberDict {
    [index: string]: number
    length: number
}

interface ReadonlyStringArray {
    readonly [index: number]: string
}

interface ClockI {
    currentTime: Date
    setTime(d: Date): void
}


class Clock implements ClockI {
    currentTime = new Date()
    constructor(h: number, m: number) {

    }
    setTime(d: Date) {
        this.currentTime = d
    }
}

interface ClockInterface {
    tick(): void
}
interface ClockConstructor {
    new(hour: number, minute: number): ClockInterface
}

function createClock(ctor: ClockConstructor, hour: number, minute: number) {
    return new ctor(hour, minute)
}


class DigitalClock implements ClockInterface {
    constructor(hour: number, minute: number) { }
    
    tick() {
        console.log('beep beep')
    }
}


class AnalogClock implements ClockInterface {
    constructor(hour: number, minute: number) { }
    
    tick() {
        console.log('tick tock')
    }
}

let digital = createClock(DigitalClock, 12, 17)
let analog = createClock(AnalogClock, 7, 32)


interface Shape {
    color: string
}

interface PenStroke {
    penWidth: number
}


interface Circle extends Shape, PenStroke {
    radius: number
}

let circle = <Circle>{}
circle.color = 'blue'
circle.penWidth = 5.0
circle.radius = 10


interface Counter {
    (start: number): string
    interval: number
    reset(): void
}

function createCounter(): Counter {
    let counter = <Counter>function (start: number) { }
    counter.interval = 123
    counter.reset = function () { }
    return counter
}

let counter = createCounter()
counter(10)


class Control {
    private state: any
}

interface SelectableControl extends Control {
    select(): void
}


class Button extends Control implements SelectableControl {
    select() { }
}

class TextBox extends Control {
    select() { }
}