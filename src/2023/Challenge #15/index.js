function autonomousDrive(store, movements) {
  const calculateNewPosition = ({ row, col }, move) => {
    if (move === 'R') return { row, col: col + 1 }
    if (move === 'L') return { row, col: col - 1 }
    if (move === 'U') return { row: row - 1, col }
    if (move === 'D') return { row: row + 1, col }
  }

  const row = store.findIndex((row) => row.includes('!'))
  const col = store[row].indexOf('!')
  let robotPosition = { row, col }
  store[row] = store[row].replace('!', '.')

  for (const move of movements) {
    const newPosition = calculateNewPosition(robotPosition, move)
    if (
      newPosition.row >= 0 &&
      newPosition.row < store.length &&
      newPosition.col >= 0 &&
      newPosition.col < store[newPosition.row].length &&
      store[newPosition.row][newPosition.col] !== '*'
    )
      robotPosition = newPosition
  }
  store[robotPosition.row] =
    store[robotPosition.row].slice(0, robotPosition.col) +
    '!' +
    store[robotPosition.row].slice(robotPosition.col + 1)
  return store
}

const store = ['..!....', '...*.*.']

const movements = ['R', 'R', 'D', 'L']
const result = autonomousDrive(store, movements)
console.log(result)
/*
[
  ".......",
  "...*!*."
]
*/

// The last movement is to the left, but it cannot move because there is an obstacle.
