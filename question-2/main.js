const testCases = [
    [[[
        [-1, 1, 0, -1, 1],
        [1, 0, 1, -1, 1],
        [1, 0, 0, -1, 1],
    ]], 2, "Tomatoes will be rotten in 2 days"],
    [[[
        [-1, 1, 0, -1, 1],
        [0, 0, 1, -1, 1],
        [1, 0, 0, -1, 1],
    ]], -1, "All tomatoes cannot be rotten"]
]


function main(
    tomatoGrid){
    // complete this function
    return -1
}

testCases.forEach(([ input, expectedResult, message ]) => {
    console.assert(main(...input) === expectedResult, message)
})