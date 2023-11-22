function createCube(size) {
  const upRight = '_\\'
  const upLeft = '/\\'
  const downLeft = '\\/'
  const downRight = '_/'
  let cube = ``
  for (let i = 0; i < size; i++) {
    const spaces = ' '.repeat(size - (i + 1))
    const upLeftSpaces = upLeft.repeat(i + 1)
    const upRightSpaces = upRight.repeat(size)
    cube = cube + spaces + upLeftSpaces + upRightSpaces + '\n'
  }

  for (let i = 0; i < size; i++) {
    const spaces = ' '.repeat(i)
    const downLeftSpaces = downLeft.repeat(size - i)
    const downRightSpaces = downRight.repeat(size)
    cube = cube + spaces + downLeftSpaces + downRightSpaces + '\n'
  }
  return cube.slice(0, cube.length - 1)
}

const cubeOfOne = createCube(1)
const cubeOfTwo = createCube(2)
const cube = createCube(3)
console.log(cubeOfOne)
console.log(cubeOfTwo)
console.log(cube)
