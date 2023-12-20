function drawClock(time) {
  const digits = [
    [
      '*',
      '*',
      '*',
      '*',
      ' ',
      '*',
      '*',
      ' ',
      '*',
      '*',
      ' ',
      '*',
      '*',
      ' ',
      '*',
      '*',
      ' ',
      '*',
      '*',
      '*',
      '*'
    ],
    [
      ' ',
      ' ',
      '*',
      ' ',
      ' ',
      '*',
      ' ',
      ' ',
      '*',
      ' ',
      ' ',
      '*',
      ' ',
      ' ',
      '*',
      ' ',
      ' ',
      '*',
      ' ',
      ' ',
      '*'
    ],
    [
      '*',
      '*',
      '*',
      ' ',
      ' ',
      '*',
      ' ',
      ' ',
      '*',
      '*',
      '*',
      '*',
      '*',
      ' ',
      ' ',
      '*',
      ' ',
      ' ',
      '*',
      '*',
      '*'
    ],
    [
      '*',
      '*',
      '*',
      ' ',
      ' ',
      '*',
      ' ',
      ' ',
      '*',
      '*',
      '*',
      '*',
      ' ',
      ' ',
      '*',
      ' ',
      ' ',
      '*',
      '*',
      '*',
      '*'
    ],
    [
      '*',
      ' ',
      '*',
      '*',
      ' ',
      '*',
      '*',
      ' ',
      '*',
      '*',
      '*',
      '*',
      ' ',
      ' ',
      '*',
      ' ',
      ' ',
      '*',
      ' ',
      ' ',
      '*'
    ],
    [
      '*',
      '*',
      '*',
      '*',
      ' ',
      ' ',
      '*',
      ' ',
      ' ',
      '*',
      '*',
      '*',
      ' ',
      ' ',
      '*',
      ' ',
      ' ',
      '*',
      '*',
      '*',
      '*'
    ],
    [
      '*',
      '*',
      '*',
      '*',
      ' ',
      ' ',
      '*',
      ' ',
      ' ',
      '*',
      '*',
      '*',
      '*',
      ' ',
      '*',
      '*',
      ' ',
      '*',
      '*',
      '*',
      '*'
    ],
    [
      '*',
      '*',
      '*',
      ' ',
      ' ',
      '*',
      ' ',
      ' ',
      '*',
      ' ',
      ' ',
      '*',
      ' ',
      ' ',
      '*',
      ' ',
      ' ',
      '*',
      ' ',
      ' ',
      '*'
    ],
    [
      '*',
      '*',
      '*',
      '*',
      ' ',
      '*',
      '*',
      ' ',
      '*',
      '*',
      '*',
      '*',
      '*',
      ' ',
      '*',
      '*',
      ' ',
      '*',
      '*',
      '*',
      '*'
    ],
    [
      '*',
      '*',
      '*',
      '*',
      ' ',
      '*',
      '*',
      ' ',
      '*',
      '*',
      '*',
      '*',
      ' ',
      ' ',
      '*',
      ' ',
      ' ',
      '*',
      '*',
      '*',
      '*'
    ]
  ]

  const clock = Array.from({ length: 7 }, () => Array(17).fill(' '))

  clock[2][8] = '*'
  clock[4][8] = '*'

  function drawDigit(digit, startColumn) {
    for (let row = 0; row < 7; row++) {
      clock[row][startColumn] = digits[digit][row * 3]
      clock[row][startColumn + 1] = digits[digit][row * 3 + 1]
      clock[row][startColumn + 2] = digits[digit][row * 3 + 2]
    }
  }

  drawDigit(parseInt(time[0]), 0)
  drawDigit(parseInt(time[1]), 4)
  drawDigit(parseInt(time[3]), 10)
  drawDigit(parseInt(time[4]), 14)
  return clock
}

const result = drawClock('12:50')
console.log(result)
