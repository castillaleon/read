const contacts = ['a1', 'a2', 'b1', 'b2', 'c1', 'c2', 'c3']

const result = []
contacts.forEach(x => {
  const firstWord = x[0]
  if (!result[firstWord]) {
    result[firstWord] = []
  }

  result[firstWord].push(x)
})
console.log(result)

const result1 = []
contacts.forEach(x => {
  if (
    !result1[result1.length - 1] ||
    (result1[result1.length - 1] && result1[result1.length - 1][0][0] !== x[0])
  ) {
    result1[result1.length] = []
  }

  result1[result1.length - 1].push(x)
})

console.log(result1)

// [["a1", "a2"], ["b1", "b2"]]

// [
//   a: ["a1", "a2"],
//   b: ["b1", "b2"]
// ]
