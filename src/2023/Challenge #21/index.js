function findBalancedSegment(message) {
  let maxLen = 0
  let start = -1
  let end = -1
  let count = 0

  const countMap = { 0: -1 }

  for (let i = 0; i < message.length; i++) {
    count += message[i] === 0 ? -1 : 1

    if (countMap[count] !== undefined) {
      const len = i - countMap[count]
      if (len > maxLen) {
        maxLen = len
        start = countMap[count] + 1
        end = i
      }
    } else {
      countMap[count] = i
    }
  }

  return start !== -1 ? [start, end] : []
}

console.log(findBalancedSegment([1, 1, 0, 1, 1, 0, 1, 1]))
//                                     |________|
//               position of segment:    [2, 5]
//               longest balanced
//                of 0s and 1s

console.log(findBalancedSegment([1, 1, 0]))
//                                  |__|
//                                 [1, 2]

console.log(findBalancedSegment([1, 1, 1]))
// no balanced segments: []
