let list: number[] = [1, 2, 3]
let lis2: Array<number> = [1, 2, 3]

let tuple: [string, number]
tuple = ['hello', 1]
console.log(tuple[0].substr(1))
console.log(tuple[1].toString())

enum Color { Red, Green, Blue }
let c: Color = Color.Red
let colorName = Color[2]

let notSure: any = 4
notSure = 'maybe a string'
notSure = false

const warnUser = (): void => {
    alert('This is a warning')
}

let unusable: void = undefined

function error(message: string): never {
    throw new Error(message)
}

let someValue: any = 'this is a string'
let strLength = (someValue as string).length