function maxGifts(houses) {
  let incl = houses[0]
  let excl = 0
  for (let i = 1; i < houses.length; i++) {
    console.log(incl, excl)
    const newExcl = Math.max(incl, excl)
    incl = excl + houses[i]
    excl = newExcl
  }
  return incl > excl ? incl : excl
}

maxGifts([2, 4, 2]) // 4 (4)
maxGifts([5, 1, 1, 5]) // 10 (5 + 5)
maxGifts([4, 1, 1, 4, 2, 1]) // 9 (4 + 4 + 1)
maxGifts([1, 3, 1, 3, 100]) // 103 (3 + 100)
