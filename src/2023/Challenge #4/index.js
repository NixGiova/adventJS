function decode(message) {
  while (message.includes('(')) {
    let starIndex = message.lastIndexOf('(')
    let endIndex =
      message.slice(starIndex, message.length).indexOf(')') + starIndex
    let start = message.slice(0, starIndex)
    let middle = [...message.slice(starIndex + 1, endIndex)].reverse().join('')
    let end = message.slice(endIndex + 1, message.length)
    message = start + middle + end
  }
  return message
}

// const a = decode('hola (odnum)')
// console.log(a) // hola mundo

// const b = decode('(olleh) (dlrow)!')
// console.log(b) // hello world!

// const c = decode('sa(u(cla)atn)s')
// console.log(c) // santaclaus

// Step by step:
// 1. Reverse the nested -> sa(ualcatn)s
// 2. Reverse the remaining one -> santaclaus

function decode1(message) {
  while (/\([^()]+\)/.test(message)) {
    message = message.replace(/\(([^()]+)\)/g, (_, match) =>
      match.split('').reverse().join('')
    )
  }
  return message
}
