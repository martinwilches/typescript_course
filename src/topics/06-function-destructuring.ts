/**
 * interfaces
*/

interface Product {
    description: string
    price: number
}

interface TaxCalculationOptions {
    products: Product[] // arreglo donde cada elemento es un objeto tipado con la interfaz Product
    tax: number
}

// producto 1
const phone: Product = {
    description: 'Nokia A1',
    price: 20
}

// producto 2
const tablet: Product = {
    description: 'iPhone',
    price: 200
}
function taxCalculation(options: TaxCalculationOptions): [number, number] { // retorna un arreglo de unicamente 2 numeros
    let total = 0

    // desestructuracion del objeto recibido como parametro en la funcion
    const {products, tax} = options

    products.forEach(({ price }) => { // desestructuracion de la propiedad price
        total += price
    })

    return [total, total * tax]
}

const shoppingCart = [phone, tablet]
const tax = 0.15

// desestructuracion en 2 variables del valor retornado por la funcion
const [total, taxTotal] = taxCalculation({
    products: shoppingCart,
    tax
})

console.log('Total: ', total)
console.log('Tax total: ', taxTotal)
