const numbers = [ 1, 2, 3, 4, 5]

const numbersFilter = numbers.filter(item => item > 2)

console.log(numbersFilter)

numbersFilter.map(item => console.log(item))

numbersFilter.push(6)
