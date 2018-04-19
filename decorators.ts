const sealed = (constructor: Function) => {
    Object.seal(constructor)
    Object.seal(constructor.prototype)
}


@sealed
class CustomGreeter {
    constructor(private greeting: string) { }

    greet() {
        return `Hello ${this.greeting}`
    }
}


function classDecorator<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        newProperty = 'new property'
        hello = 'override'
    }
}


@classDecorator
class MyGreeter {
    property = 'property'
    hello: string

    constructor(greeting: string) {
        this.hello = greeting
    }
}


console.log(new MyGreeter('world'))