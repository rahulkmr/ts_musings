class Greeter {
    private greeting: string

    constructor(message: string) {
        this.greeting = message
    }

    greet() {
        return `Hello ${this.greeting}`
    }
}


let greeter = new Greeter('world')


class Mammal {
    private name: string
    
    constructor(name: string) {
        this.name = name
    }

    move(distance: number = 0) {
        console.log(`Animal moved ${distance}m`)
    }
}


class Snake extends Mammal {
    constructor(name: string) {
        super(name)
    }

    move(distance: number = 5) {
        console.log(`Slithering...`)
        super.move(distance)
    }
}

class Horse extends Mammal {
    constructor(name: string) {
        super(name)
    }

    move(distance: number = 45) {
        console.log(`Galloping...`)
        super.move(distance)
    }
}

class Doggy extends Mammal {
    constructor(name: string) {
        super(name)
    }

    bark() {
        console.log(`Woof! Woof!`)
    }
}

const dog = new Doggy('Jimmy')
dog.bark()
dog.move(10)

const sam = new Snake('Sammy the python')
const tom: Mammal = new Horse('Tommy the horse')

sam.move()
tom.move(34)

class Octopus {
    readonly numberOfLegs: number = 8

    constructor(readonly name: string) {
    }
}

let dad = new Octopus('Man with the 8 strong legs')


class Employee {
    private _fullName: string = ''

    get fullName(): string {
        return this._fullName
    }

    set fullName(name: string) {
        this._fullName = name
    }
}

let employee = new Employee()
employee.fullName = 'Bob Smith'
console.log(employee.fullName)


class Grid {
    static origin = { x: 0, y: 0 }

    constructor(public scale: number) {

    }

    distanceFromOrigin(point: { x: number, y: number }) {
        let xDist = (point.x - Grid.origin.x)
        let yDist = (point.y - Grid.origin.y)
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale
    }
}

abstract class Department {
    constructor(public name: string) {

    }

    printName(): void {
        console.log(`Department ${this.name}`)
    }

    abstract printMeeting(): void
}


class Accounting extends Department {
    constructor() {
        super('Accounting')
    }

    printMeeting(): void {
        console.log('Accounting department meets every Monday at 10am')
    }

    generateReports(): void {
        console.log('Generating reports')
    }

}