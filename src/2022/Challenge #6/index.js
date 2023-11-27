function createCube(size) {
  let head = []
  let tail = []
  for (let i = 0; i < size; i++) {
    head.push(
      ' '.repeat(size - (i + 1)) + '/\\'.repeat(i + 1) + '_\\'.repeat(size)
    )
    tail.push(' '.repeat(i) + '\\/'.repeat(size - i) + '_/'.repeat(size))
  }

  return [...head, ...tail].join('\n')
}

const cubeOfOne = createCube(1)
const cubeOfTwo = createCube(2)
const cube = createCube(3)
console.log(cubeOfOne)
console.log(cubeOfTwo)
console.log(cube)
