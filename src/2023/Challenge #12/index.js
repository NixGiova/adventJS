function checkIsValidCopy(original, copy) {
  if (original.length !== copy.length) return false
  for (let index = 0; index < original.length; index++) {
    let char = original[index].match(/\w/g)
    const valid = `${char ? `${char}${char[0].toLowerCase()}` : ''}#+:. `
    if (valid.indexOf(copy[index]) < valid.indexOf(original[index]))
      return false
  }
  return true
}

console.log(checkIsValidCopy('Santa Claus is coming', 'sa#ta cl#us is comin#')) // true
console.log(checkIsValidCopy('Santa Claus is coming', 'p#nt: cla#s #s c+min#')) // false (for the initial p)
console.log(checkIsValidCopy('Santa Claus', 's#+:. c:. s')) // true
console.log(checkIsValidCopy('Santa Claus', 's#+:.#c:. s')) // false (there is a # where it should not be)

function checkIsValidCopy(original, copy) {
  for (let i = 0; i < original.length; i++) {
    const co = original.charAt(i)
    const cc = copy.charAt(i)
    if (
      (['#', '+', ':', '.'].includes(cc) && co === ' ') ||
      (!['#', '+', ':', '.', ' ', co.toLowerCase()].includes(cc) && co !== ' ')
    ) {
      return false
    }
  }
  return true
}
