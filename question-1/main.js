// feel free to add more test cases.
// the format is as follows - 
// [[numbers, targetSum], expectedOutput, errorMessage]

const testCases = [
	[[[5, 4, 10,7, 1, 9], 13], true, "Triplet Exists"],
	[[[4, 2, 5, 8, 11, 23], 9], false, "Triplet does not exist"]
]

function main(
	numbers,
	targetSum){
	// complete this function
	return true
}

testCases.forEach(([ input, expectedResult, message ]) => {
	console.assert(main(...input) === expectedResult, message)
})