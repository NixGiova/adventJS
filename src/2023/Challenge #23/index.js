function organizeChristmasDinner(dishes) {
  const obj = {}
  obj.repe = new Set()

  for (const dish of dishes) {
    const [dishName, ...ings] = dish
    for (const ing of ings) {
      obj[ing] = [...(obj[ing] ??= []), dishName]
      if (obj[ing].length > 1) obj.repe.add(ing)
    }
  }
  const result = []

  for (const ing of [...obj.repe].sort()) {
    result.push([ing, ...obj[ing].sort()])
  }

  return result
}

const dishes = [
  ['christmas turkey', 'turkey', 'sauce', 'herbs'],
  ['cake', 'flour', 'sugar', 'egg'],
  ['hot chocolate', 'chocolate', 'milk', 'sugar'],
  ['pizza', 'sauce', 'tomato', 'cheese', 'ham']
]

organizeChristmasDinner(dishes)

/*

"sauce" is in 2 dishes: "christmas turkey" and "pizza".
"sugar" is in 2 dishes: "cake" and "hot chocolate".
The rest of the ingredients only appear in one dish, so we do not show them.

We show "sauce" first because alphabetically it comes before "sugar".
And the dishes of each ingredient are also alphabetically ordered.

[
  ["sauce", "christmas turkey", "pizza"],
  ["sugar", "cake", "hot chocolate"]
]
*/
