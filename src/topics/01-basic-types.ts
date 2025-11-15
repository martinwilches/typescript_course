const name = 'Martin' // al declarar la variable se infiere que es de tipo string
let age: number = 31 // definir el tipo de dato de la variable al declararla

/** age solo podra ser reasignada con valores de tipo number */

let hpPoints: number | string = 95 // `|` permite definir mas de un tipo de dato para una variable
hpPoints = 'FULL'

let power: number | 'FULL' = 90 // Con `|` se puede especificar valor exacto que puede recibir eventualmente la variable
// en el ejemplo anterior power puede ser reasignada con valores de tipo number o con el string FULL

console.log({
    name, hpPoints, power
})
