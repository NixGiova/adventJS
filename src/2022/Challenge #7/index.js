function getGiftsToRefill(a1, a2, a3) {
  const inventory = a1.concat(a2, a3)
  const uniqueGifts = Array.from(new Set(inventory))
  return uniqueGifts.filter((gift) => {
    return a1.includes(gift) + a2.includes(gift) + a3.includes(gift) === 1
  })
}

const a1 = ['bike', 'car', 'bike', 'bike']
const a2 = ['car', 'bike', 'doll', 'car']
const a3 = ['bike', 'pc', 'pc']

/* The store a1 has "bike" and "car".
The store a2 has "car", "bike" and "doll".
The store a3 has "bike" and "pc".

The gift "doll" and "pc" are only in the stores a2 and a3 respectively.
*/

const gifts = getGiftsToRefill(a1, a2, a3) // ['doll', 'pc']

console.log(gifts)
