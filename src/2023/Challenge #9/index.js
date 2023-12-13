function adjustLights(lights) {
  if (lights.length === 0) return 0
  const minChange = lights.reduce(
    (min, light, index) => {
      if (index % 2 === 0 && light !== '🟢') {
        min = { minG: min.minG + 1, minR: min.minR }
      }
      if (index % 2 !== 0 && light !== '🔴') {
        min = { minG: min.minG + 1, minR: min.minR }
      }

      if (index % 2 === 0 && light !== '🔴') {
        min = { minG: min.minG, minR: min.minR + 1 }
      }
      if (index % 2 !== 0 && light !== '🟢') {
        min = { minG: min.minG, minR: min.minR + 1 }
      }
      return min
    },
    { minG: 0, minR: 0 }
  )
  return Math.min(minChange.minG, minChange.minR)
}

console.log(adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢']))
// -> 1 (you change the fourth light to 🔴)

console.log(adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴']))
// -> 2 (you change the second light to 🟢 and the third to 🔴)

console.log(adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢']))
// -> 0 (they are already alternating)

console.log(adjustLights(['🔴', '🔴', '🔴']))
// -> 1 (you change the second light to 🟢)

console.log(adjustLights(['🔴', '🔴', '🟢', '🔴', '🟢', '🔴', '🟢']))

function adjustLightsOptimized(lights) {
  function checkLights(lights) {
    let changes = 0
    for (let index = 1; index < lights.length; index++) {
      if (lights[index] === lights[index - 1]) {
        changes++
        lights[index] = lights[index] === '🟢' ? '🔴' : '🟢'
      }
    }
    return changes
  }
  return Math.min(checkLights([...lights]), checkLights([...lights].reverse()))
}
