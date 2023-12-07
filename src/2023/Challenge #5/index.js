function cyberReindeer(road, time) {
  let roadsArray = [road]
  let roadTmp = road
  road = road.replace('S', '.')
  for (let step = 1; step < time; step++) {
    if (step === 5) {
      roadTmp = roadTmp.replaceAll('|', '*')
      road = road.replaceAll('|', '*')
    }
    const sledPos = roadTmp.indexOf('S')
    console.log(sledPos)
    if (roadTmp[sledPos + 1] !== '|') {
      roadTmp =
        road.slice(0, sledPos + 1) +
        'S' +
        roadTmp.slice(sledPos + 2, roadTmp.length)
    }
    roadsArray.push(roadTmp)
  }
  return roadsArray
}

const road = 'S..|...|..'
const time = 10 // units of time
console.log(cyberReindeer(road, time))

/* -> result:
[
  0'S..|...|..', // initial state
  1'.S.|...|..', // sled advances on the road
  2'..S|...|..', // sled advances on the road
  3'..S|...|..', // sled stops at the barrier
  4'..S|...|..', // sled stops at the barrier
  5'...S...*..', // barrier opens, sled advances
  6'...*S..*..', // sled advances on the road
  7'...*.S.*..', // sled advances on the road
  8'...*..S*..', // sled advances on the road
  9'...*...S..', // passes through the open barrier
]
*/

function cyberReindeer1(road, time) {
  let roadsArray = [road]
  let roadStep = '.'
  for (let step = 1; step < time; step++) {
    if (step === 5) road = road.replaceAll('|', '*')
    const sledPos = road.indexOf('S')
    if (road[sledPos + 1] !== '|') {
      const iniRoad = road.slice(0, sledPos + 1).replace('S', roadStep) + 'S'
      const endRoad = road.slice(sledPos + 2, road.length)
      roadStep = road[sledPos + 1]
      road = iniRoad + endRoad
    }
    roadsArray.push(road)
  }
  return roadsArray
}

console.log(cyberReindeer1(road, time))
