someOrder = {
  items: [
    { name: 'Dragon food'        , price: 8,   quantity: 8 },
    { name: 'Dragon cage (small)', price: 800, quantity: 2 },
    { name: 'Shipping', price: 40, shipping: true }
  ]
}

const orderTotal = order =>  order.items.reduce((prev, cur) => prev + cur.price,0)

console.log(orderTotal(someOrder))
  
result = orderTotal(someOrder)
result