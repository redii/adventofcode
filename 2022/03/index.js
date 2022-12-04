const fs = require("fs")

const data = fs.readFileSync("input", { encoding: "utf8" })
const rucksacks = data.split("\n")

// PART 1
let sumOne = 0
for (const rucksack of rucksacks) {
	const compartment1 = [...rucksack.slice(0, rucksack.length / 2)]
	const compartment2 = [...rucksack.slice(rucksack.length / 2)]

	const convertedCompartment = []
	for (const char of compartment1) {
		const charCodeSubstract = char === char.toLowerCase() ? 96 : 38
		convertedCompartment.push(char.charCodeAt() - charCodeSubstract)
	}

	for (const char of compartment2) {
		const charCodeSubstract = char === char.toLowerCase() ? 96 : 38
		const charValue = char.charCodeAt() - charCodeSubstract
		if (convertedCompartment.includes(charValue)) {
			sumOne += charValue
			break
		}
	}
}
console.log("PART 1:", sumOne)

// PART 2
let sumTwo = 0
for (let i = 0; i < rucksacks.length / 3; i += 1) {
	const offset = i * 3
	const group = rucksacks.slice(offset, offset + 3)
	let foundChars = []
	for (const rucksack of group) {
		const rucksackChars = [...rucksack]
		if (!foundChars.length) {
			for (const char of rucksackChars) {
				if (!foundChars.includes(char)) foundChars.push(char)
			}
		} else {
			foundChars = foundChars.filter((c) => rucksackChars.includes(c))
		}
	}
	const charCodeSubstract = foundChars[0] === foundChars[0].toLowerCase() ? 96 : 38
	sumTwo += foundChars[0].charCodeAt() - charCodeSubstract
}
console.log("PART 2:", sumTwo)
