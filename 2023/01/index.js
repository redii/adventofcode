const fs = require("fs")

const data = fs.readFileSync("input", { encoding: "utf8" })
const c = data.split("\n")

let firstAnswer = 0
for (let i of c) {
  let firstNum = null,
    lastNum = null

  for (let char of i.split("")) {
    if (char >= 0 && char <= 9) {
      firstNum = char
      break
    }
  }

  for (let char of i.split("").reverse()) {
    if (char >= 0 && char <= 9) {
      lastNum = char
      break
    }
  }

  firstAnswer += Number(firstNum + lastNum)
}

console.log("First Answer: " + firstAnswer)

const spelledNumbers = {
  zero: "0",
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
}

let secondAnswer = 0
for (let i of c) {
  let firstNum = null,
    firstNumIndex = null,
    lastNum = null,
    lastNumIndex = null

  // get first number
  for (let [index, char] of i.split("").entries()) {
    if (char >= 0 && char <= 9) {
      firstNumIndex = index
      break
    }
  }

  // check for spelled number after firstNumIndex
  for (let j = 0; j < firstNumIndex; j++) {
    let substr = i.substring(j, j + 3)
    if (spelledNumbers[substr]) firstNum = spelledNumbers[substr]
    substr = i.substring(j, j + 4)
    if (spelledNumbers[substr]) firstNum = spelledNumbers[substr]
    substr = i.substring(j, j + 5)
    if (spelledNumbers[substr]) firstNum = spelledNumbers[substr]
    if (firstNum) break
  }

  // get last number
  for (let [index, char] of i.split("").reverse().entries()) {
    if (char >= 0 && char <= 9) {
      lastNumIndex = index
      break
    }
  }

  // check for spelled number after lastNumIndex
  for (let j = i.length; j > lastNumIndex; j--) {
    let substr = i.substring(j, j - 3)
    if (spelledNumbers[substr]) lastNum = spelledNumbers[substr]
    substr = i.substring(j, j - 4)
    if (spelledNumbers[substr]) lastNum = spelledNumbers[substr]
    substr = i.substring(j, j - 5)
    if (spelledNumbers[substr]) lastNum = spelledNumbers[substr]
    if (lastNum) break
  }

  secondAnswer += Number(
    (firstNum ? firstNum : i.split("")[firstNumIndex]) +
      (lastNum ? lastNum : i.split("").reverse()[lastNumIndex])
  )
}

console.log("Second Answer: " + secondAnswer)
