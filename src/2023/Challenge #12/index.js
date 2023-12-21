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

function checkIsValidCopy(original, copy) {
  const SIMBOLOS = '#+:. '
  const filter_obj = {
    a: SIMBOLOS,
    b: SIMBOLOS,
    c: SIMBOLOS,
    d: SIMBOLOS,
    e: SIMBOLOS,
    f: SIMBOLOS,
    g: SIMBOLOS,
    h: SIMBOLOS,
    i: SIMBOLOS,
    j: SIMBOLOS,
    k: SIMBOLOS,
    l: SIMBOLOS,
    m: SIMBOLOS,
    n: SIMBOLOS,
    o: SIMBOLOS,
    p: SIMBOLOS,
    q: SIMBOLOS,
    r: SIMBOLOS,
    s: SIMBOLOS,
    t: SIMBOLOS,
    u: SIMBOLOS,
    v: SIMBOLOS,
    w: SIMBOLOS,
    x: SIMBOLOS,
    y: SIMBOLOS,
    z: SIMBOLOS,
    A: 'a' + SIMBOLOS,
    B: 'b' + SIMBOLOS,
    C: 'c' + SIMBOLOS,
    D: 'd' + SIMBOLOS,
    E: 'e' + SIMBOLOS,
    F: 'f' + SIMBOLOS,
    G: 'g' + SIMBOLOS,
    H: 'h' + SIMBOLOS,
    I: 'i' + SIMBOLOS,
    J: 'j' + SIMBOLOS,
    K: 'k' + SIMBOLOS,
    L: 'l' + SIMBOLOS,
    M: 'm' + SIMBOLOS,
    N: 'n' + SIMBOLOS,
    O: 'o' + SIMBOLOS,
    P: 'p' + SIMBOLOS,
    Q: 'q' + SIMBOLOS,
    R: 'r' + SIMBOLOS,
    S: 's' + SIMBOLOS,
    T: 't' + SIMBOLOS,
    U: 'u' + SIMBOLOS,
    V: 'v' + SIMBOLOS,
    W: 'w' + SIMBOLOS,
    X: 'x' + SIMBOLOS,
    Y: 'y' + SIMBOLOS,
    Z: 'z' + SIMBOLOS,
    '#': '+:. ',
    '+': ':. ',
    ':': '. ',
    '.': ' '
  }

  return original.split('').every((letra_actual, i) => {
    const copia_actual = copy.at(i++)
    let filtro = letra_actual + filter_obj[letra_actual]
    return filtro.includes(copia_actual)
  })
}
