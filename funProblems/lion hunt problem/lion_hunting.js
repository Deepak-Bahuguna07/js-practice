const testCaseToUse = "Z LZ";
let preyDistance = -1;
let preyDistanceTemp = 99;

for (let targetIndex = 0; targetIndex < testCaseToUse.length; targetIndex++) {
  if (testCaseToUse[targetIndex] !== " ") {
    let nextTargetIndex = ((targetIndex + 1) !== testCaseToUse) ? targetIndex + 1 : targetIndex;

    while (nextTargetIndex < testCaseToUse.length) {
      if (testCaseToUse[targetIndex] === testCaseToUse[nextTargetIndex]) {
        targetIndex = nextTargetIndex;
      }
      if (testCaseToUse[nextTargetIndex] !== " " && testCaseToUse[targetIndex] !== testCaseToUse[nextTargetIndex]) {
        preyDistanceTemp = (nextTargetIndex - 1) - targetIndex < preyDistanceTemp ? (nextTargetIndex - 1) - targetIndex : preyDistanceTemp;
        targetIndex = nextTargetIndex;
      }
      nextTargetIndex++;
    }
  }
}

preyDistance = preyDistanceTemp === 99 ? preyDistance : preyDistanceTemp;

console.log("Input:", testCaseToUse, " Output:", preyDistance);