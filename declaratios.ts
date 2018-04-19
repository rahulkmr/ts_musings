let input = [1, 2]
let [first, second] = input

let obj = {
    a: 'foo',
    b: 12,
    c: 'bar',
    d: true,
}

let { a, b, ...passthrough } = obj
let { a: newName1, b: newName2 } = obj

type C = { a: string, b?: number }
function f({ a, b = 0 } = { a: '' }) {
    console.log(a, b)
}

let foo = [1, 2]
let bar = [3, 4]
let both = [0, ...foo, ...bar, 5]