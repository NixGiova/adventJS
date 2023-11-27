function checkPart(part) {
  let canBePalindrome = false
  part.split('').forEach((letter, index) => {
    const fragment = part.slice(0, index) + part.slice(index + 1)
    const fragmentReverse = fragment.split('').reverse().join('')
    if (fragment === fragmentReverse) {
      canBePalindrome = true
    }
  })
  return canBePalindrome
}

console.log(checkPart('uwu')) // true
// "uwu" is a palindrome without removing any character

console.log(checkPart('miidim')) // true
// "miidim" can be a palindrome after removing the first "i"

console.log(checkPart('midu')) // false
// "midu" cannot be a palindrome after removing a character
