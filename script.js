
// Higher order functions
// Reduce
// Filter - loops and returns an array with matching conditions
// Map - loops and returns an array

const doubleMap = (numbers) => {
  return numbers.map(number => number * 2)
}

// console.log(doubleMap([1, 2, 3, 4]))

// Filter([1 ,2 3, 4, 5, 6], 3) greater than [4, 5, 6]
const filter = (numbers, greaterThan) => {
  let result = []
  for (const number of numbers) {
    if (number > greaterThan) {
      result.push(number)
    }
  }
  return result
}

// console.log(filter([1, 2, 3, 4, 5, 6], 3))

const lol = [1, 2, 3, 4, 5, 6]
// console.log(lol.filter(num => num > 4 || num < 2))

const actors = [
  {name: 'johnny', netWorth: 2000000},
  {name: 'amber', netWorth: 10},
  {name: 'leo', netWorth: 1200000000},
]
// console.log(lol.filter(num => num > 4 || num < 2))
console.log(actors.filter(actor => actor.netWorth > 10))