const fs = require("fs")

const data = fs.readFileSync("input", { encoding: "utf8" })
const stackData = data.split("\n\n")[0].split("\n")
const moves = data.split("\n\n")[1].split("\n")

let stacks = []
const stacksCount = stackData[stackData.length - 1].trim().split("   ").at(-1)
for (i = 0; i < stacksCount; i++) stacks.push([])
for (i = stackData.length - 2; i >= 0; i--) {
	for (j = 0; j < stacksCount; j++) {
		const char = stackData[i].substring(j * 4 + 1, j * 4 + 2)
		if (char !== " ") stacks[j].push(char === " " ? false : char)
	}
}

// PART 1
const stacksOne = stacks
for (const move of moves) {
	const moveArray = move.split(" ")
	const count = Number(moveArray[1])
	const fromStack = Number(moveArray[3] - 1)
	const toStack = Number(moveArray[5] - 1)

	for (i = 0; i < count; i++) {
		const crate = stacksOne[fromStack].pop()
		stacksOne[toStack].push(crate)
	}
}
console.log("PART 1:", stacksOne.map((stack) => stack[stack.length - 1]).join(""))

// PART 2
const stacksTwo = stacks
for (const move of moves) {
	const moveArray = move.split(" ")
	const count = Number(moveArray[1])
	const fromStack = Number(moveArray[3] - 1)
	const toStack = Number(moveArray[5] - 1)

	let crates = []
	for (i = 0; i < count; i++) {
		const crate = stacksTwo[fromStack].pop()
		crates.push(crate)
	}
	crates = crates.reverse()
	stacksTwo[toStack] = stacksTwo[toStack].concat(crates)
}
console.log("PART 2:", stacksTwo.map((stack) => stack[stack.length - 1]).join(""))
