function test(): void {} // la funcion no retorna nada

// parametros tipados en la funcion
function addNumbers(a: number, b: number) {
    return a + b;
}

const addNumbersArrow = (a: number, b: number): string => { // la funcion retorna un valor de tipo string
    return `El resultado de la suma es ${a + b}`;
}

// el parametro secondNumber es definido como opcional en la firma de la funcion
function multiply(firstNumber: number, secondNumber?: number, base: number = 2) {
    return firstNumber * base;
}

// const result: number = addNumbers(1,2)
// const result2: string = addNumbersArrow(100, 200)
// const multiplyResult: number = multiply(5)

// console.log({result, result2, multiplyResult})

/**
 * Funciones como objetos como argumentos
*/

interface Character {
    name: string
    hp: number
    showUp: () => void
}

// el primer parametro de la funcion debe ser un objeto cuyas propiedades han sido tipadas con la interfaz Character
const healCharacter = (character: Character, amount: number) => {
    character.hp += amount
}

const strider = {
    name: 'Strider',
    hp: 50,
    showUp() {
        console.log(`Puntos de vida ${this.hp}`)
    }
}


healCharacter(strider, 5)
strider.showUp()
