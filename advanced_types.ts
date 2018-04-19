function extend<T, U>(first: T, second: U): T & U {
    let result = <T & U>{}

    for (let id in first) {
        (result as any)[id] = (first as any)[id]
    }

    for (let id in second) {
        if (!result.hasOwnProperty(id)) {
            (result as any)[id] = (second as any)[id]
        }
    }

    return result
}


class Author {
    constructor(public name: string) { }
}


interface Loggable {
    log(): void
}


class ConsoleLogger implements Loggable {
    log() {
        console.log('log')
    }
}

const jim = extend(new Author('Jim'), new ConsoleLogger())
console.log(jim.name)
jim.log()


function padLeft(value: string, padding: number | string) {
    if (typeof padding === 'number') {
        return Array(padding + 1).join(' ') + value
    } else {
        return padding + value
    }
}

padLeft('Hello', 4)

interface Bird {
    fly(): void
    layEggs(): void
}

interface Fish {
    swim(): void
    layEggs(): void
}


interface Padder {
    getPaddingString(): string
}


class SpaceRepeatingPadder implements Padder {
    constructor(private numSpaces: number) { }

    getPaddingString() {
        return Array(this.numSpaces + 1).join(' ')
    }
}


class StringPadder implements Padder {
    constructor(private value: string) { }

    getPaddingString() {
        return this.value
    }
}


const getRandomPadder = () => Math.random() < 0.5 ?
    new SpaceRepeatingPadder(2) :
    new StringPadder('  ')

const padder: Padder = getRandomPadder()


function nullRemoval(sn: string | null): string {
    if (sn === null) {
        return 'default'
    }
    return sn
}


function fixed(name: string | null): string {
    function postfix(epithet: string) {
        return name!.charAt(0) + '. the ' + epithet
    }
    name = name || 'Bob'
    return postfix('great')
}


type Name = string
type NameResolver = () => string
type NameOrResolver = Name | NameResolver

function getName(n: NameOrResolver): Name {
    if (typeof n === 'string') {
        return n
    } else {
        return n()
    }
}

type Tree<T> = {
    value: T
    left: Tree<T>
    right: Tree<T>
}

type LinkedList<T> = T & { next: LinkedList<T> }

interface Person {
    name: string
}


type Easing = 'ease-in' | 'ease-out' | 'ease-in-out'

class BasicCalculator {
    public constructor(protected value: number = 0) { }

    public currentValue(): number {
        return this.value
    }

    public add(operand: number): this {
        this.value += operand
        return this
    }

    public subtract(operand: number): this {
        this.value -= operand
        return this
    }

    public multiply(operand: number): this {
        this.value *= operand
        return this
    }

    public divide(operand: number): this {
        this.value /= operand
        return this
    }
}


class ScientificCalculator extends BasicCalculator {
    public constructor(value = 0) {
        super(value)
    }

    public sin(): this {
        this.value = Math.sin(this.value)
        return this
    }
}

const val = new ScientificCalculator(2)
    .multiply(5)
    .sin()
    .add(1)
    .currentValue()


function pluck<T, K extends keyof T>(object: T, names: K[]): T[K][] {
    return names.map(name => object[name])
}

interface Emp {
    name: string
    salary: number
    age: number,
    department: string,
}


let joe: Emp = {
    name: 'Joe',
    salary: 100000,
    age: 30,
    department: 'eng',
}

let names = pluck(joe, ['name', 'age'])


interface MyMap<T> {
    [key: string]: T
}


type MyReadonly<T> = {
    readonly [K in keyof T]: T[K]
}

type MyPartial<T> = {
    [K in keyof T]?: T[K]
}


type Keys = 'option1' | 'option2'
type Flags = { [K in Keys]: boolean }


type NullableEmp = { [K in keyof Emp]: Emp[K] | null }
type PartialEmp = { [K in keyof Emp]?: Emp[K] }


type Nullable<T> = { [K in keyof T]: T[K] | null }


type Proxy<T> = {
    get(): T
    set(value: T): void
}

type Proxify<T> = {
    [K in keyof T]: Proxy<T[K]>
}
