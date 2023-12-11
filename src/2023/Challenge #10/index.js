function createChristmasTree(ornaments, height) {
  let j = 0
  const tree = []
  for (let index = 1; index <= height; index++) {
    const row = []
    for (; row.length < index; j++) {
      row.push(ornaments[j])
      if (j === ornaments.length - 1) j = -1
    }
    tree.push(' '.repeat(height - index) + row.join(' '))
  }
  tree.push(' '.repeat(height - 1) + '|')
  return tree.join('\n') + '\n'
}

console.log(createChristmasTree(['*', '@', 'O'], 3))

/*
   1
  2 3
 1 2 3
1 2 3 1
   |
*/

console.log(createChristmasTree([1, 2, 3], 7))

/*
      1
     2 3
    1 2 3
   1 2 3 1
  2 3 1 2 3
 1 2 3 1 2 3
1 2 3 1 2 3 1
      |

*/
