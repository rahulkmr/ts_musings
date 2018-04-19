class Disposable {
    isDisposed: boolean

    dispose() {
        this.isDisposed = true
    }
}


class Activable {
    isActive: boolean

    activate() {
        this.isActive = true
    }

    deactivate() {
        this.isActive = false
    }
}


class Smart implements Disposable, Activable {
    isDisposed: boolean = false
    dispose: () => void

    isActive: boolean = false
    activate: () => void
    deactivate: () => void
}


const mixin = (derived: any, bases: any[]) {
    bases.forEach(base => {
        Object.getOwnPropertyNames(base.prototype).forEach(name => {
            derived.prototype[name] = base.prototype[name]
        })
    })
}

const smart = new Smart()