function calculateTime(deliveries) {
  let deadLine = 25200
  for (const delivery of deliveries) {
    const [hours, minutes, seconds] = delivery.split(':').map(Number)
    deadLine -= hours * 3600 + minutes * 60 + seconds
  }
  const sign = Math.sign(deadLine) === 1 ? '-' : ''
  const lackTimeInFormat = new Date(Math.abs(deadLine) * 1000)
    .toISOString()
    .substr(11, 8)

  return `${sign}${lackTimeInFormat}`
}

console.log(calculateTime(['00:10:00', '01:00:00', '03:30:00'])) // '-02:20:00'
console.log(calculateTime(['02:00:00', '05:00:00', '00:30:00'])) // '00:30:00'
console.log(calculateTime(['00:45:00', '00:45:00', '00:00:30', '00:00:30'])) // '-05:29:00'
console.log(calculateTime(['02:00:00', '05:00:00', '00:30:00'])) //'00:30:00'
