const fs = require("fs");

const rawData = fs.readFileSync("input", { encoding: "utf8" });
const rawDataRows = rawData.split("\n");

let leftList = [];
let rightList = [];
for (const row of rawDataRows) {
  const values = row.split("   ");
  leftList.push(Number(values[0]));
  rightList.push(Number(values[1]));
}

leftList = leftList.sort();
rightList = rightList.sort();

let totalDistance = 0;
for (let i = 0; i < leftList.length; i++) {
  let tmpDistance = leftList[i] - rightList[i];
  if (tmpDistance < 0) tmpDistance = tmpDistance * -1;
  totalDistance += tmpDistance;
}

console.log("First answer:", totalDistance);

let totalValue = 0;
const countDictionary = {};

for (const value of leftList) {
  if (!countDictionary[value]) {
    const count = rightList.filter((v) => v === value).length;
    countDictionary[value] = count;
  }
  totalValue += countDictionary[value] * value;
}

console.log("Second answer:", totalValue);
