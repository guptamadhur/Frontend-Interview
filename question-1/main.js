// feel free to add more test cases.
// the format is as follows -
// [[numbers, targetSum], expectedOutput, errorMessage]

const testCases = [
  [[[5, 4, 10, 7, 1, 9], 13], true, "Triplet Exists"],
  [[[5, 1, 4], 10], true, "Triplet Exists"],
  [[[4, 2, 5, 8, 11, 23], 9], false, "Triplet does not exist"],
  [[[4, 2, 5, 8, 5, 23], 9], true, "Triplet Exist"],
];

const main = (numbers, targetSum) => {
  // complete this function
  numbers.sort(function (a, b) {
    return a - b;
  });
  //three numners only
  if (numbers.length === 3) {
    if (numbers[0] + numbers[1] + numbers[2] == targetSum) {
      return true;
    }
  } else {
    let l, r;
    for (let i = 0; i < numbers.length - 2; i++) {
      l = i + 1;
      r = numbers.length - 1;
      while (l < r) {
        const localSum = numbers[i] + numbers[l] + numbers[r];
        if (localSum == targetSum) {
          return true;
        } else if (localSum < targetSum) {
          l = l + 1;
        } else {
          //localSum > targetSum
          r = r - 1;
        }
      }
    }
  }
  return false;
};

testCases.forEach(([input, expectedResult, message]) => {
  console.assert(main(...input) === expectedResult, message);
  // console.log(main(...input) === expectedResult, message);
});
