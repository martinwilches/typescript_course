export class Person {
    // se declaran las propiedades de la clase y se les asigna el valor desde el constructor
    constructor(public name: string, private address: string) {}
}

export class Hero extends Person {
    constructor(public alterEgo: string, public age: number, public realName: string) {
        // super() herada el constructor del padre
        super(realName, 'NY')
    }
}

const h1 = new Hero('Iron Man', 45, 'Tony Stark')
console.log(h1)
