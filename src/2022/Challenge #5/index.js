function getMaxGifts(giftsCities, maxGifts, maxCities) {
  let combinations = []

  function getCombinations(actual, ini, k) {
    if (k === 0) {
      combinations = [...combinations, actual.slice()]
      return
    }
    for (let i = ini; i < giftsCities.length; i++) {
      getCombinations([...actual, giftsCities[i]], i + 1, k - 1)
    }
  }

  let result = []
  for (let j = maxCities; j > 0; j--) {
    getCombinations([], 0, j)
    console.log(combinations)
    const iter = combinations.reduce((sum, comb) => {
      const sumIter = comb.reduce((a, b) => a + b, 0)
      return sumIter <= maxGifts && sumIter > sum ? sumIter : sum
    }, 0)
    result = [...result, iter]
    if (result === maxGifts) return
    combinations = []
  }

  const max = result.reduce((a, b) => Math.max(a, b), -Infinity)
  return max
}

const getMaxGiftsOptimizer = (giftsCities, maxGifts, maxCities) => {
  let combinations = []
  combinations.push([], [giftsCities[0]])
  giftsCities.shift()
  giftsCities.map((element) => {
    const newList = combinations.map((comb) => {
      let _combination = [...comb]
      if (_combination.length < maxCities) {
        _combination.push(element)
      }
      return _combination
    })
    combinations = combinations.concat(newList)
  })

  combinations.shift()
  return Math.max(
    ...combinations.map((x) => {
      let sum = x.reduce((total, num) => total + num)
      return sum > maxGifts ? 0 : sum
    })
  )
}

console.log(getMaxGiftsOptimizer([12, 3, 11, 5, 7], 20, 3)) // 20
console.log(getMaxGiftsOptimizer([50], 15, 1)) // 0
console.log(getMaxGiftsOptimizer([50], 100, 1)) // 50
console.log(getMaxGiftsOptimizer([50, 70], 100, 1)) // 70
console.log(getMaxGiftsOptimizer([50, 70, 30], 100, 2)) // 100
console.log(getMaxGiftsOptimizer([50, 70, 30], 100, 3)) // 100
console.log(getMaxGiftsOptimizer([50, 70, 30], 100, 4)) // 100
console.log(getMaxGiftsOptimizer([50, 10, 40, 1000, 500, 200], 199, 4)) // 100
console.log(
  getMaxGiftsOptimizer([50, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 1000, 1000)
) // 115

// console.log(getMaxGifts([12, 3, 11, 5, 7], 20, 3)) // 20
// console.log(getMaxGifts([50], 15, 1)) // 0
// console.log(getMaxGifts([50], 100, 1)) // 50
// console.log(getMaxGifts([50, 70], 100, 1)) // 70
// console.log(getMaxGifts([50, 70, 30], 100, 2)) // 100
// console.log(getMaxGifts([50, 70, 30], 100, 3)) // 100
// console.log(getMaxGifts([50, 70, 30], 100, 4)) // 100
// console.log(getMaxGifts([50, 10, 40, 1000, 500, 200], 199, 4)) // 100
// console.log(getMaxGifts([50, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 1000, 1000)) // 115
