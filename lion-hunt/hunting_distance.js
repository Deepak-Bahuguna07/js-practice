const testCase1 = "L     L";
const testCase2 = "Z   Z   Z";
const testCase3 = "LZ";
const testCase4 = "L Z";
const testCase5 = "L ZL";
const testCase6 = "L  ZL Z";
const testCase7 = "L     Z";
const testCase8 = "Z   L  Z";
const testCase9 = "ZZ   L  Z";
const testCase10 = "  Z   L  Z";
const testCase11 = "ZZ LL  Z";

const testCaseToUse = testCase11;

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
// nextTargetIndex++;

// if (testCaseToUse[targetIndex] === "L" && testCaseToUse[nextTargetIndex] === "Z") {
//     preyDistance = (nextTargetIndex - 1) - targetIndex;
//     targetIndex = nextTargetIndex;
// }
// nextTargetIndex++;

// if (testCaseToUse[targetIndex] === "L" && testCaseToUse[nextTargetIndex] === "Z") {
//     preyDistance = (nextTargetIndex - 1) - targetIndex;
//     targetIndex = nextTargetIndex;
// }
// nextTargetIndex++;

// if (testCaseToUse[targetIndex] === "L" && testCaseToUse[nextTargetIndex] === "Z") {
//     preyDistance = (nextTargetIndex - 1) - targetIndex;
//     targetIndex = nextTargetIndex;
// }
// nextTargetIndex++;

// if (testCaseToUse[targetIndex] === "L" && testCaseToUse[nextTargetIndex] === "Z") {
//     preyDistance = (nextTargetIndex - 1) - targetIndex;
//     targetIndex = nextTargetIndex;
// }
// nextTargetIndex++;

// if (testCaseToUse[targetIndex] === "L" && testCaseToUse[nextTargetIndex] === "Z") {
//     preyDistance = (nextTargetIndex - 1) - targetIndex;
//     targetIndex = nextTargetIndex;
// }
// nextTargetIndex++;


// if (testCaseToUse[0] === "L" && testCaseToUse[3] === "Z") {
//     preyDistance = (3 - 1) - 0;
// }

// if (testCaseToUse[0] === "L" && testCaseToUse[4] === "Z") {
//     preyDistance = (4 - 1) - 0;
// }

// if (testCaseToUse[0] === "L" && testCaseToUse[5] === "Z") {
//     preyDistance = (5 - 1) - 0;
// }

// if (testCaseToUse[0] === "L" && testCaseToUse[6] === "Z") {
//     preyDistance = (6 - 1) - 0;
// }


// if (testCaseToUse[0] === "L" && testCaseToUse[3] === "Z") {
//     preyDistance = (3 - 1) - 0;
// }

// if (testCaseToUse[3] === "Z" && testCaseToUse[4] === "L"){
//     preyDistance = (4-1) - 3;
// }

console.log("Input:", testCaseToUse, " Output:", preyDistance);