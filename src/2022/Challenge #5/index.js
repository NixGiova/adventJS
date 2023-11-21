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
    let resultIter = 0
    getCombinations([], 0, j)
    combinations.forEach((comb) => {
      const sum = comb.reduce((a, b) => a + b, 0)
      if (sum > 0 && sum <= maxGifts && sum > resultIter) resultIter = sum
    })
    result = [...result, resultIter]
    if (result === maxGifts) return
    combinations = []
  }

  return result.reduce((acc, current) => {
    return current > 0 && current <= maxGifts && current > acc ? current : acc
  }, 0)
}

console.log(getMaxGifts([12, 3, 11, 5, 7], 20, 3)) // 20
console.log(getMaxGifts([50], 15, 1)) // 0
console.log(getMaxGifts([50], 100, 1)) // 50
console.log(getMaxGifts([50, 70], 100, 1)) // 70
console.log(getMaxGifts([50, 70, 30], 100, 2)) // 100
console.log(getMaxGifts([50, 70, 30], 100, 3)) // 100
console.log(getMaxGifts([50, 70, 30], 100, 4)) // 100
console.log(getMaxGifts([50, 10, 40, 1000, 500, 200], 199, 4)) // 100
console.log(getMaxGifts([50, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 1000, 1000)) // 115
