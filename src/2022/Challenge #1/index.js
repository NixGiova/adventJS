function wrapping(gifts) {
  const wrappedGifts = gifts.map((gift) => {
    const firstlayer = `*${gift}*`
    const bottomToplayer = '*'.repeat(firstlayer.length)
    return `${bottomToplayer}\n${firstlayer}\n${bottomToplayer}`
  })
  return wrappedGifts
}

const gifts = ['cat', 'game', 'socks']
const wrapped = wrapping(gifts)
console.log(wrapped)
