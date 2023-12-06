function maxDistance(movements) {
  const stars = movements.replaceAll('*', '')
  const forward = movements.replaceAll('>', '')
  const backward = movements.replaceAll('<', '')

  return (
    Math.abs(
      movements.length - forward.length - (movements.length - backward.length)
    ) +
    (movements.length - stars.length)
  )
}

// Math formule = D = |L - F - (L - B)| + (L - S)

const movements = '>>*<'
const result = maxDistance(movements)
console.log(result) // -> 2

const movements2 = '<<<>'
const result2 = maxDistance(movements2)
console.log(result2) // -> 2

const movements3 = '>***>'
const result3 = maxDistance(movements3)
console.log(result3) // -> 5
