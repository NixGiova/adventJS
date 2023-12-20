function revealSabotage(store) {
  const adjacentKeys = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1]
  ]

  const result = [...store]
  for (let row = 0; row < store.length; row++) {
    for (let col = 0; col < store[row].length; col++) {
      if (store[row][col] === '*') {
        adjacentKeys.forEach(([rowOffset, colOffset]) => {
          const newRow = row + rowOffset
          const newCol = col + colOffset
          if (
            newRow >= 0 &&
            newRow < store.length &&
            newCol >= 0 &&
            newCol < store[row].length &&
            result[newRow][newCol] !== '*'
          ) {
            const value = parseInt(result[newRow][newCol])
            result[newRow][newCol] = ((value || 0) + 1).toString()
          }
        })
      }
    }
  }
  return result
}

const store = [
  ['*', ' ', ' ', ' '],
  [' ', ' ', '*', ' '],
  [' ', ' ', ' ', ' '],
  ['*', ' ', ' ', ' ']
]

console.log(revealSabotage(store))
/* Should display:
[
    ['*', '2', '1', '1'],
    ['1', '2', '*', '1'],
    ['1', '2', '1', '1'],
    ['*', '1', ' ', ' ']
]
*/

console.log(
  revealSabotage([
    ['*', '*', '*'],
    ['*', ' ', '*'],
    ['*', '*', '*']
  ])
)

/*
[
  ["*","*","*"],
  ["*","8", "*"],
  ["*","*", "*"]
]
*/
