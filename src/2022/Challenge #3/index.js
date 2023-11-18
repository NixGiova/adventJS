function distributeGifts(packOfGifts, reindeers) {
  const maxWeight = reindeers.reduce(
    (acc, reindeer) => acc + reindeer.length * 2,
    0
  )
  const totalWeight = packOfGifts.reduce((acc, gift) => {
    return acc + gift.length
  }, 0)
  return Math.floor(maxWeight / totalWeight)
}

const packOfGifts = ['book', 'doll', 'ball']
const reindeers = ['dasher', 'dancer']

console.log(distributeGifts(packOfGifts, reindeers))
