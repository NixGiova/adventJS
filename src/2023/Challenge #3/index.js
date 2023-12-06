function findNaughtyStep(original, modified) {
  if (original === modified) return ''
  for (let i = 0; i < original.length; i++) {
    if (original[i] !== modified[i]) {
      return original.length > modified.length ? original[i] : modified[i]
    }
  }
  return modified.slice(original.length)
}

function findNaughtyStepOpt(original, modified) {
  if (original.length === modified.length) return ''
  const iterator = modified.length > original.length ? modified : original
  for (let index = 0; index < iterator.length; index++) {
    if (original[index] !== modified[index]) {
      return iterator[index]
    }
  }
  return modified.slice(original.length)
}

console.log(findNaughtyStep('abcd', 'abcde')) // 'e
console.log(findNaughtyStep('stepfor', 'stepor')) // 'f'
console.log(findNaughtyStep('abcde', 'abcde')) // ''
