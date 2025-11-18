// importacion del modulo
import { taxCalculation, type Product } from "./06-function-destructuring"

const shoppingCart: Product[] = [
    {
        description: 'Motorola',
        price: 100
    },
    {
        description: 'Xiaomi',
        price: 160
    }
]

const [total, taxTotal] = taxCalculation({
    products: shoppingCart,
    tax: 0.15
})

console.log('Total: ', total)
console.log('Tax total: ', taxTotal)
