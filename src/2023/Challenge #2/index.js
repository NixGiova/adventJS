function manufacture(gifts, materials) {
  return gifts.filter((gift) =>
    gift.split('').every((letter) => materials.includes(letter))
  )
}

function manufactureExp1(gifts, materials) {
  const regex = new RegExp(`^[${materials}]*$`)
  return gifts.filter((gift) => regex.test(gift))
}
function manufactureExp2(gifts, materials) {
  const regex = new RegExp(`^[${materials}]+${'$'}`)
  return gifts.filter(regex.test.bind(regex))
}

console.log(manufacture(['tren', 'oso', 'pelota'], 'tronesa')) // ["tren", "oso"]
console.log(manufacture(['juego', 'puzzle'], 'jlepuz')) // ["puzzle"]
console.log(manufacture(['libro', 'ps5'], 'psli')) // []
console.log(manufacture(['coche', 'muñeca', 'balon'], 'ocmuñalb')) // []
