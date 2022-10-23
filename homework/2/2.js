const input = process.argv[2]

console.log(input)

if (input.match(/^[a-z][a-z0-9]+$/i)) {
  console.log("It's a valid variable name")
} else {
  console.log("It's not a valid variable name")
}
