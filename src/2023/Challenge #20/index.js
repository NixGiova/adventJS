function distributeGifts(weights) {
  const adjacentKeys = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
    [0, 0]
  ]
  let result = []
  for (let row = 0; row < weights.length; row++) {
    const resultRow = []
    for (let col = 0; col < weights[row].length; col++) {
      let newValue = adjacentKeys.reduce(
        (acc, [rowOffset, colOffset]) => {
          const newRow = row + rowOffset
          const newCol = col + colOffset
          if (
            newRow >= 0 &&
            newRow < weights.length &&
            newCol >= 0 &&
            newCol < weights[row].length &&
            weights[newRow][newCol] !== null
          ) {
            return {
              sum: acc.sum + weights[newRow][newCol],
              length: acc.length + 1
            }
          }
          return acc
        },
        { sum: 0, length: 0 }
      )
      resultRow[col] = Math.round(newValue.sum / newValue.length)
    }
    result[row] = resultRow
  }
  return result
}

const input = [
  [4, 5, 1],
  [6, null, 3],
  [8, null, 4]
]

console.log(input[-1])

console.log(distributeGifts(input))
/*
  // Step by step result of the first few calculations:

  // At position [0][0] we have the value 4
  // Its neighbors are the values 5 and 6
  // (4 + 5 + 6) / 3 = 5

  // At position [0][1] we have the value 5
  // Its neighbors are the values 4 and 1
  // (5 + 4 + 1) / 3 = 3.33
  // Math.round(3.33) = 3

  // At position [0][2] we have the value 1
  // Its neighbors are the values 5 and 3
  // (1 + 5 + 3) / 3 = 3

  // At position [1][0] we have the value 6
  // Its neighbors are the values 4, 8
  // (6 + 4 + 8 ) / 3 = 6

  // At position [1][1] we have the value null
  // Its neighbors are the values 5, 6 and 3
  // (5 + 6 + 3) / 3 = 4.66
  // Math.round(4.66) = 5
  // ... and so on with the rest of the positions
  ([(4 + 5 + 6) / 3, (5 + 4 + 1) / 3, (1 + 5 + 3) / 3],
  [(6 + 4 + 8) / 3, (5 + 6 + 3) / 3, (3 + 1 + 4) / 3],
  [(8 + 6) / 2, (8 + 4) / 2, (4 + 3) / 2])
][
  // Final result after rounding with Math.round()
  ([5, 3, 3], [6, 5, 3], [7, 6, 4])
]

*/
