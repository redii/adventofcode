const fs = require("fs")

const data = fs.readFileSync("input", { encoding: "utf8" })
const elves = data.split("\n\n")

// PART 1
let currentMostCalories = 0
for (const elf of elves) {
	const calories = elf.split("\n").map(Number)
	const sum = calories.reduce((total, c) => total + c, 0)
	if (sum > currentMostCalories) currentMostCalories = sum
}
console.log("PART 1:", currentMostCalories)

// PART 2
let sums = []
for (const elf of elves) {
	const calories = elf.split("\n").map(Number)
	const sum = calories.reduce((total, c) => total + c, 0)
	sums = [...sums, sum]
}
sums = sums.sort((a, b) => b - a)
console.log("PART 2:", sums[0] + sums[1] + sums[2])
