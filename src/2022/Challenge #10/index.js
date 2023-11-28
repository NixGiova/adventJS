function checkJump(heights) {
  const left = heights.splice(0, heights.indexOf(Math.max(...heights)))
  const condL = left.slice(1).every((l, i) => {
    return l >= left[i]
  })
  const condR = heights.slice(1).every((h, i) => {
    return h <= heights[i]
  })

  return condL && condR && !!left.length && heights.length > 1
}

console.log(checkJump([1, 3, 8, 5, 2])) // true

/*
It's `true`.
The jump goes up-down.

    8 (highest point)
   ↗ ↘
  3   5
 ↗     ↘
1       2
*/

console.log(checkJump([1, 7, 3, 5])) // false

/*
It's `false`.
It goes up-down-up.

  7   5
 ↗ ↘ ↗
1   3
*/

console.log(checkJump([1, 2, 2, 2, 1])) // true

console.log(checkJump([2, 2, 2, 2])) // false

console.log(checkJump([1, 1000, 900, 800])) // true
