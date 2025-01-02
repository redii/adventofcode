const fs = require("fs");

const rawData = fs.readFileSync("input", { encoding: "utf8" });
const rawDataRows = rawData.split("\n");

function check(levels, direction = undefined) {
  const a = levels[0];
  const b = levels[1];
  let diff = a - b;
  let diffAbs = a - b;
  if (diff <= 0) diffAbs = diff * -1;
  let tmpDirection = a > b ? "desc" : "asc";

  if (diffAbs > 3 || diffAbs === 0) return false;
  if (direction !== undefined && direction !== tmpDirection) return false;

  if (levels.length === 2) return true;
  levels.shift();

  return check(levels, tmpDirection);
}

let validReportsCount = 0;
for (const report of rawDataRows) {
  const levels = report.split(" ").map((l) => Number(l));
  const isValid = check(levels);
  if (isValid) validReportsCount += 1;
}

console.log("First answer:", validReportsCount);

let validReportsCount2 = 0;
for (const report of rawDataRows) {
  const levels = report.split(" ").map((l) => Number(l));
  const isValid = check([...levels]);

  if (isValid) {
    validReportsCount2 += 1;
  } else {
    for (let i = 0; i < levels.length; i++) {
      const tmpLevels = [...levels];
      tmpLevels.splice(i, 1);
      const isValid = check(tmpLevels);
      if (isValid) {
        validReportsCount2 += 1;
        break;
      }
    }
  }
}

console.log("Second answer:", validReportsCount2);
