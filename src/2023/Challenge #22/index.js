function compile(code) {
  let pointer = 0
  let counter = 0
  let indexOfReturn = -1
  let commands = {
    '+': () => counter++,
    '-': () => counter--,
    '*': () => (counter *= 2),
    '%': () => (indexOfReturn = pointer),
    '<': () =>
      indexOfReturn >= 0
        ? ((pointer = indexOfReturn), (indexOfReturn = -1))
        : (pointer = pointer),
    '¿': () =>
      (pointer =
        counter > 0 ? pointer : code.slice(pointer).indexOf('?') + pointer)
  }

  while (code[pointer]) commands[code[pointer++]]?.()

  return counter
}

compile('++*-') // 3
// (1 + 1) * 2 - 1 = 3

compile('++%++<') // 6
// 1 + 1 + 1 + 1 + 1 + 1 = 6

compile('++<--') // 0
// 1 + 1 - 1 - 1 = 0

compile('++¿+?') // 3
// 1 + 1 + 1 = 3

compile('--¿+++?') // -2
// - 1 - 1 = -2
