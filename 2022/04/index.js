const fs = require("fs")

const data = fs.readFileSync("input", { encoding: "utf8" })
const pairs = data.split("\n")

// PART 1
let counterOne = 0
for (const pair of pairs) {
	const spans = pair.split(",")
	const first = spans[0].split("-").map(Number)
	const second = spans[1].split("-").map(Number)

	if (first[0] === second[0] || first[1] === second[1]) {
		counterOne += 1
	} else {
		if (first[0] < second[0]) {
			if (first[1] > second[1]) counterOne += 1
		} else {
			if (second[1] > first[1]) counterOne += 1
		}
	}
}
console.log("PART 1:", counterOne)

// PART 2
let counterTwo = 0
for (const pair of pairs) {
	const spans = pair.split(",")
	const first = spans[0].split("-").map(Number)
	const second = spans[1].split("-").map(Number)

	if (
		(first[0] <= second[0] && first[1] >= second[0]) ||
		(first[0] >= second[0] && first[0] <= second[1])
	) {
		counterTwo += 1
	}
}
console.log("PART 2:", counterTwo)
