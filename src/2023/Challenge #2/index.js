function manufacture(gifts, materials) {
  const madeGifts = gifts.filter((gift) =>
    gift.split('').every((letter) => materials.includes(letter))
  )
  return madeGifts
}

console.log(manufacture(['tren', 'oso', 'pelota'], 'tronesa')) // ["tren", "oso"]
console.log(manufacture(['juego', 'puzzle'], 'jlepuz')) // ["puzzle"]
console.log(manufacture(['libro', 'ps5'], 'psli')) // []
console.log(manufacture(['coche', 'muñeca', 'balon'], 'ocmuñalb')) // []
