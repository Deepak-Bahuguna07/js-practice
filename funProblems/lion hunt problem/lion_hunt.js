const testCase1 = "LZ";
const testCase2 = "L Z";
const testCase3 = "L ZL";

const testCaseToUse = "     ";

let preyDistance = -1;
let preyDistanceTemp = 99;
let targetIndex = 0;

for (let nextTargetIndex = targetIndex + 1; nextTargetIndex < testCaseToUse.length; nextTargetIndex++) {
    if (testCaseToUse[targetIndex] === "L" && (testCaseToUse[nextTargetIndex] === "Z" || testCaseToUse[nextTargetIndex] === "L")) {
        if (testCaseToUse[targetIndex] === "L" && testCaseToUse[nextTargetIndex] === "Z") {
            preyDistanceTemp = (nextTargetIndex - 1) - targetIndex < preyDistanceTemp ? (nextTargetIndex - 1) - targetIndex : preyDistanceTemp;
            targetIndex = nextTargetIndex;
        }
        else {
            targetIndex = nextTargetIndex;
        }
    }
    
    else if (testCaseToUse[targetIndex] === "Z" && (testCaseToUse[nextTargetIndex] === "L" || testCaseToUse[nextTargetIndex] === "Z")) {
        if (testCaseToUse[targetIndex] === "Z" && testCaseToUse[nextTargetIndex] === "L") {
            preyDistanceTemp = (nextTargetIndex - 1) - targetIndex < preyDistanceTemp ? (nextTargetIndex - 1) - targetIndex : preyDistanceTemp;
            targetIndex = nextTargetIndex;
        }
        else {
            targetIndex = nextTargetIndex;
        }
    }

    else if (testCaseToUse[targetIndex] === " ") {
        targetIndex++;
        nextTargetIndex++;
    }
}

preyDistance = preyDistanceTemp === 99 ? preyDistance : preyDistanceTemp;

console.log("Input:", testCaseToUse, " Output:",preyDistance);
