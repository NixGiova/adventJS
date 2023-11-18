function countHours(year, holidays) {
  const reduce = holidays.reduce((extraHours, holyDay) => {
    const numberDay = new Date(`${holyDay}/${year}`).getDay()
    if (numberDay >= 1 && numberDay <= 5) return extraHours + 2
    return extraHours
  }, 0)
  return reduce
}

const year = 2022
const holidays = ['01/06', '04/01', '12/25']
console.log(countHours(year, holidays))
