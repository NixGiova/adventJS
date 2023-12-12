function getIndexsForPalindrome(word) {
  if (word.split('').reverse().join('') === word) return []
  for (let index = 0; index < word.length - 1; index++) {
    for (let j = index + 1; j < word.length; j++) {
      const lettersTmp = [...word]
      lettersTmp.splice(index, 1, word[j])
      lettersTmp.splice(j, 1, word[index])
      const ori = lettersTmp.join('')
      const rev = lettersTmp.reverse().join('')
      if (ori === rev) {
        return [index, j]
      }
    }
  }
  return null
}

console.log(getIndexsForPalindrome('anna')) // []
console.log(getIndexsForPalindrome('abab')) // [0, 1]
console.log(getIndexsForPalindrome('abac')) // null
console.log(getIndexsForPalindrome('aaaaaaaa')) // []
console.log(getIndexsForPalindrome('aaababa')) // [1, 3]
console.log(getIndexsForPalindrome('caababa')) // null

// function tu validate a string input
// the function must validate if the word is palindrome and return []
// if the word can be a palindrome change 1 time a letter by other in the same word return the 2 postition of letters
// if the word can't be a palindrome return null
