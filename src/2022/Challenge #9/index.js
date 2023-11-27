function countTime(leds) {
  let time = 0
  while (leds.some((led) => led === 0)) {
    const newLeds = leds.map((led, index) => {
      if (led === 1) return 1
      if (led === 0 && index === 0 && leds[leds.length - 1] === 1) return 1
      else if (led === 0 && leds[index - 1] === 1) return 1
      else return 0
    })
    time += 7
    leds = [...newLeds]
  }
  return time
}

console.log(countTime([1, 1, 1, 1, 1, 1, 1, 1])) // 0

console.log(countTime([0, 1, 1, 0, 1])) // 7
// 7 seconds because in the first change
// all the lights turned on
// 0s: [0, 1, 1, 0, 1]
// 7s: [1, 1, 1, 1, 1]

console.log(countTime([0, 0, 0, 1])) // 21
// 21 seconds because it needs three changes:
// 0s: [0, 0, 0, 1]
// 7s: [1, 0, 0, 1]
// 14s: [1, 1, 0, 1]
// 21s: [1, 1, 1, 1]

console.log(countTime([0, 0, 1, 0, 0])) // 28
// 28 seconds because it needs four changes:
// 0s: [0, 0, 1, 0, 0]
// 7s: [0, 0, 1, 1, 0]
// 14s: [0, 0, 1, 1, 1]
// 21s: [1, 0, 1, 1, 1]
// 28s: [1, 1, 1, 1, 1]
