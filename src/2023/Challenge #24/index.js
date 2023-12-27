function getStaircasePaths(steps, maxJump) {
  const currentPath = (arguments[2] ??= [])
  const result = (arguments[3] ??= [])
  const jump = (arguments[4] ??= 1)

  return ([[currentPath]][+(steps !== 0)] ??=
    (([true][+(jump <= Math.min(steps, maxJump))] ??=
      (result.push(
        ...getStaircasePaths(steps - jump, maxJump, [...currentPath, jump])
      ),
      getStaircasePaths(steps, maxJump, currentPath, result, jump + 1))),
    result))
}

console.log(getStaircasePaths(2, 1)) // [[1, 1]]
console.log(getStaircasePaths(3, 3)) // [[1, 1, 1], [1, 2], [2, 1], [3]]
console.log(getStaircasePaths(5, 1)) // [[1, 1, 1, 1, 1]]
console.log(getStaircasePaths(5, 2))
/*
[
  [1, 1, 1, 1, 1],
  [1, 1, 1, 2],
  [1, 1, 2, 1],
  [1, 2, 1, 1],
  [1, 2, 2],
  [2, 1, 1, 1],
  [2, 1, 2],
  [2, 2, 1],
]
*/
