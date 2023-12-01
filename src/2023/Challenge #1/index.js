function findFirstRepeated(gifts) {
  const seen = new Set()
  for (const id of gifts) {
    if (seen.has(id)) return id
    seen.add(id)
  }
  return -1
}

function findFirstRepeatedFilter(gifts) {
  const repeated = giftIds.filter((gift, i) => giftIds.indexOf(gift) !== i)
  return repeated.length > 0 ? repeated[0] : -1
}

const giftIds = [2, 1, 3, 5, 3, 2]
const firstRepeatedId = findFirstRepeated(giftIds)
console.log(firstRepeatedId) // 3
// Even though 2 and 3 are repeated
// 3 appears second time first

const giftIds2 = [1, 2, 3, 4]
const firstRepeatedId2 = findFirstRepeated(giftIds2)
console.log(firstRepeatedId2) // -1
// It is -1 since no number is repeated

const giftIds3 = [5, 1, 5, 1]
const firstRepeatedId3 = findFirstRepeated(giftIds3)
console.log(firstRepeatedId3) // 5

console.log(findFirstRepeatedFilter(giftIds)) // 3
