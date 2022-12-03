const fs = require("fs")

const rps = {
	A: 1, // Rock
	B: 2, // Paper
	C: 3, // Scissors
	X: 1, // Rock
	Y: 2, // Paper
	Z: 3, // Scissors
}

const ldw = {
	X: 0, // Lose
	Y: 3, // Draw
	Z: 6, // Win
}

const matchUps = [
	[3, 6, 0],
	[0, 3, 6],
	[6, 0, 3],
]

;(async () => {
	const data = fs.readFileSync("input", { encoding: "utf8" })
	const rounds = data.split("\n")

	// PART 1
	let scoreOne = 0
	for (const round of rounds) {
		const inputs = round.split(" ")
		const opValue = rps[inputs[0]]
		const myValue = rps[inputs[1]]
		scoreOne += matchUps[opValue - 1][myValue - 1] + myValue
	}
	console.log("PART 1:", scoreOne)

	// PART 2
	let scoreTwo = 0
	for (const round of rounds) {
		const inputs = round.split(" ")
		const opValue = rps[inputs[0]]
		const matchResult = ldw[inputs[1]]
		matchUps[opValue - 1].forEach((v, i) => {
			if (v === matchResult) scoreTwo += matchResult + i + 1
		})
	}
	console.log("PART 2:", scoreTwo)
})()
