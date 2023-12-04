function findNaughtyStep(original, modified) {
  if (original === modified) return ''
  for (let i = 0; i < original.length; i++) {
    if (original[i] !== modified[i]) {
      return original.length > modified.length ? original[i] : modified[i]
    }
  }
  return modified.slice(original.length)
}

console.log(findNaughtyStep('abcd', 'abcde')) // 'e
console.log(findNaughtyStep('stepfor', 'stepor')) // 'f'
console.log(findNaughtyStep('abcde', 'abcde')) // ''
