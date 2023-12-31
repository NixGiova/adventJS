function organizeGifts(gifts) {
  const dictionary = [
    { value: 50, symbol: '[]' },
    { value: 10, symbol: '{}' }
  ]
  const regex = /(\d+)([a-zA-Z])/g
  let match
  let giftsOrdered = ''
  while ((match = regex.exec(gifts)) !== null) {
    let quantity = parseInt(match[1])
    const letter = match[2]

    for (const giftPack of dictionary) {
      while (quantity >= giftPack.value) {
        giftsOrdered +=
          giftPack.symbol.slice(0, 1) + letter + giftPack.symbol.slice(1)
        quantity -= giftPack.value
      }
    }
    if (quantity > 0) giftsOrdered += '(' + letter.repeat(quantity) + ')'
  }
  return giftsOrdered
}

const result1 = organizeGifts('76a11b')
console.log(result1)
// `[a]{a}{a}(aaaaaa){b}(b)`

/* Explanation:

  76a: 76 gifts type 'a' would be packed in 7 boxes and 6 gifts would be left, resulting in 1 pallet [a] (for the first 5 boxes), 2 loose boxes {a}{a} and a bag with 6 gifts (aaaaaa)

  11b: 11 gifts type 'b' would be packed in 1 box and 1 gift would be left, resulting in 1 loose box {b} and a bag with 1 gift (b)
  */

function organizeGifts1(gifts) {
  const matches = gifts.match(/(\d*\w)/g)
  if (!matches) return ''
  const packages = matches.reduce((acc, curr) => {
    let quantity = parseInt(curr.match(/\d+/g)) || 0
    const gift = curr.at(-1)
    const pallets = Math.floor(quantity / 50)
    const boxes = Math.floor((quantity - pallets * 50) / 10)
    const bags = Math.floor(quantity % 10)
    if (pallets > 0) acc += `[${gift}]`.repeat(pallets)
    if (boxes > 0) acc += `{${gift}}`.repeat(boxes)
    if (bags > 0) acc += `(${gift.repeat(bags)})`
    return acc
  }, '')
  return packages
}

console.log(organizeGifts1('76a11b'))
