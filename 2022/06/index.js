const fs = require("fs")

const data = fs.readFileSync("input", { encoding: "utf8" })
const chars = data.split("")

// PART 1
for (i = 0; i < chars.length; i++) {
	const charsToCheck = chars.slice(i, i + 4)
	const charsToCheckSet = new Set(charsToCheck)
	if (charsToCheckSet.size === charsToCheck.length) {
		console.log("PART 1:", i + 4)
		break
	}
}

// PART 2
for (i = 0; i < chars.length; i++) {
	const charsToCheck = chars.slice(i, i + 14)
	const charsToCheckSet = new Set(charsToCheck)
	if (charsToCheckSet.size === charsToCheck.length) {
		console.log("PART 1:", i + 14)
		break
	}
}
