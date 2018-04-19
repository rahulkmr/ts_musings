interface Named {
    name: string
}


class Foo {
    name: string = ''
}

let p: Named = new Foo()
const alice = {name: 'Alice', location: 'Seattle'}
let x: Named = alice


let items = [1, 2, 3]
items.forEach((item, index, array) => console.log(item))
items.forEach(item => console.log(item))

let less = (a: number) => 0
let more = (a: number, s: string) => 0

more = less

let lessReturn = () => ({name: 'Alice'})
let moreReturn = () => ({name: 'Alice', location: 'Seattle'})

lessReturn = moreReturn

enum EventType { Mouse, Keyboard }

interface Listener { timestamp: number; }
interface MouseListener extends Listener { posX: number; posY: number }
interface KeyListener extends Listener { keyCode: number }

function listenEvent(eventType: EventType, handler: (e: Listener) => void) {
    /* ... */
}

function func1(e: MouseListener): void {
    console.log(e.posX, e.posY)
}


listenEvent(EventType.Mouse, func1)

