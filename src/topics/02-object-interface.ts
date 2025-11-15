// definir un arreglo que solo pueda recibir valores de un tipo especifico
const skills: string[] = ['Bash', 'Counter', 'Healing']

// `interface` permite tipar las propiedades de un objeto literal
interface Character {
    name: string
    hp: number
    skills: string[]
    hometown?: string // El caracter `?` especifica que la propiedad `hometown` es opcional
}

const strider: Character = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter'],
}

strider.hometown = 'Rivendell'

console.table(strider)
