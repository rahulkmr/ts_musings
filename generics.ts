function identity<T>(arg: T): T {
    return arg
}

interface GenericIdentityFn {
    <T>(arg: T): T
}

let myIdentity: GenericIdentityFn = identity


class GenericNumber<T> {
    constructor(public zero: T, public add: (x: T, y: T) => T) { }
}


function getProperty<T, K extends keyof T>(object: T, key: K) {
    return object[key]
}


function create<T>(c: { new(): T }): T {
    return new c()
}


class BeeKeeper {
    hasMask: boolean = true
}

class ZooKeeper {
    nameTag: string = ''
}

class Wild {
    numLegs: number = 2
}

class Bee extends Wild {
    keeper: BeeKeeper

    constructor(keeper: BeeKeeper) {
        super()
        this.keeper = keeper
    }
}


class Lion extends Wild {
    keeper: ZooKeeper

    constructor(keeper: ZooKeeper) {
        super()
        this.keeper = keeper
    }
}

function createInstance<A extends Wild>(c: new () => A): A {
    return new c()
}