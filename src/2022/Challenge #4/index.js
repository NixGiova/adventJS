function fitsInOneBox(boxes) {
  const orderedBox = boxes.sort((first, second) => {
    const sumFirst = first.l + first.h + first.w
    const sumSecond = second.l + second.h + second.w
    return sumFirst - sumSecond
  })

  const result = orderedBox.reduce((fit, box, index) => {
    if (index === 0) return fit
    if (!fit) return fit
    const prev = orderedBox[index - 1]
    return box.l > prev.l && box.w > prev.w && box.h > prev.h
  }, true)

  return result
}

// const boxes = [
//   { l: 1, w: 1, h: 1 },
//   { l: 2, w: 2, h: 2 }
// ]

// console.log(fitsInOneBox(boxes)) // true

// const boxes = [
//   { l: 1, w: 1, h: 1 },
//   { l: 2, w: 2, h: 2 },
//   { l: 3, w: 1, h: 3 }
// ]

// console.log(fitsInOneBox(boxes)) // false

// const boxes = [
//   { l: 1, w: 1, h: 1 },
//   { l: 3, w: 3, h: 3 },
//   { l: 2, w: 2, h: 2 }
// ]

// console.log(fitsInOneBox(boxes)) // true

const boxes = [
  { l: 1, w: 1, h: 10 },
  { l: 3, w: 3, h: 12 },
  { l: 2, w: 2, h: 1 }
]

console.log(fitsInOneBox(boxes)) // false
