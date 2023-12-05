const fs = require("fs")

const data = fs.readFileSync("input", { encoding: "utf8" })
const lines = data.split("\n")

let pwd = []
let tree = { name: "/", children: [] }
for (const line of lines) {
	const arguments = line.split(" ")
	if (line.startsWith("$")) {
		if (arguments[1] === "cd") {
			if (arguments[2] === "..") {
				pwd.pop()
			} else {
				pwd.push(arguments[2])
			}
		}
	} else {
		if (arguments[0] !== "dir") {
		}
	}
}
console.log("PATH 1:", tree)
