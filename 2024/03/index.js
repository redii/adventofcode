const fs = require("fs");

const rawData = fs.readFileSync("input", { encoding: "utf8" });

const mulRegex = /mul\(\d{1,3},\d{1,3}\)/g;
const firstMatches = rawData.match(mulRegex);

function mulMatches(matches) {
  let total = 0;
  for (let match of matches) {
    match = match.slice(4);
    match = match.slice(0, -1);
    const nums = match.split(",");
    total += nums[0] * nums[1];
  }
  return total;
}

let firstTotal = mulMatches(firstMatches);
console.log("First answer:", firstTotal);

const doSplits = rawData.split("do()");

let secondTotal = 0;
for (const [i1, doSplit] of doSplits.entries()) {
  const dontSplits = doSplit.split("don't()");
  for (const [i2, dontSplit] of dontSplits.entries()) {
    if (i2 === 0) {
      const matches = dontSplit.match(mulRegex);
      secondTotal += mulMatches(matches);
    }
  }
}

console.log("Second answer:", secondTotal);
