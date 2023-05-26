const array = [
    { name: 'iPhone', price: 5000, quantity: 2 },
    { name: 'MacBook Pro', price: 20000, quantity: 1 },
    { name: 'Magic Mouse', price: 1000, quantity: 5 },
];

// .find() --> Retorna o primeiro objeto true
let find

find = array.find(array => {
    return array.name === 'Magic Mouse'
})
console.log({ find })

find = array.find(array => {
    return array.price > 10000
})
console.log({ find })

//.findIndex() --> Retorna apenas o indice
let findIndex

findIndex = array.findIndex(array => {
    return array.name === 'MacBook Pro'
})
console.log({ findIndex })

findIndex = array.findIndex(array => {
    return array.quantity < 5
})
console.log({ findIndex })

// .some()
let some

some = array.some(array => {
    return array.price > 1000
})
console.log({ some })

some = array.some(array => {
    return array.quantity > 10
})
console.log({ some })

// .every()
let every

every = array.every(array => {
    return array.price >= 1000
})
console.log({ every })

every = array.every(array => {
    return array.name === 'Magic Mouse'
})
console.log({ every })