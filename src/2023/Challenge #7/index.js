function drawGift(size, symbol) {
  if (size === 1) return '#\n'
  const head = [' '.repeat(size - 1) + '#'.repeat(size)]
  const tail = []
  for (let iterator = 2; iterator < size; iterator++) {
    head.push(
      ' '.repeat(size - iterator) +
        '#' +
        symbol.repeat(size - 2) +
        '#' +
        symbol.repeat(iterator - 2) +
        '#'
    )
    tail.push(
      '#' +
        symbol.repeat(size - 2) +
        '#' +
        symbol.repeat(size - iterator - 1) +
        '#'
    )
  }

  const middle = ['#'.repeat(size) + symbol.repeat(size - 2) + '#']
  tail.push('#'.repeat(size))

  return [...head, ...middle, ...tail].join('\n') + '\n'
}

console.log(drawGift(4, '+'))

/*
   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####
*/

console.log(drawGift(5, '*'))
/*
    #####
   #***##
  #***#*#
 #***#**#
#####***#
#***#**#
#***#*#
#***##
#####
*/

console.log(drawGift(1, '^'))
/*
#
*/

console.log(drawGift(2, '&'))
/*
 ##
###
##
*/

console.log(drawGift(10, '%'))
/* 
         ##########
        #%%%%%%%%##
       #%%%%%%%%#%#
      #%%%%%%%%#%%#
     #%%%%%%%%#%%%#
    #%%%%%%%%#%%%%#
   #%%%%%%%%#%%%%%#
  #%%%%%%%%#%%%%%%#
 #%%%%%%%%#%%%%%%%#
##########%%%%%%%%#
#%%%%%%%%#%%%%%%%#
#%%%%%%%%#%%%%%%#
#%%%%%%%%#%%%%%#
#%%%%%%%%#%%%%#
#%%%%%%%%#%%%#
#%%%%%%%%#%%#
#%%%%%%%%#%#
#%%%%%%%%##
##########

*/

// repetir espacios size -1 + repetir # size --> esto es para el inicio y el final
// iniciar ciclo en 2
// repetir espacios size - iterator
// #
// repetir simbolo size - 2
// #
// repetir simbolo iterator - 2
// #

//#
// repetir simbolo size - 2
// #
// repetir simbolo iterator - 2
// #

// iterator 7
// '   #%%%%%%%%#'
