const input = process.argv[2]

if (input.match(/^[0-9]+$/)) {
  console.log("It's a number")
} else {
  console.log("It's not a number")
}
