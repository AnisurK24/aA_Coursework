// Write a function, stepper(nums), that takes in an array of non negative numbers.
// Each element of the array represents the maximum number of steps you can take from that position in the array.
// The function should return a boolean indicating if it is possible to travel from the 
// first position of the array to the last position.
//
// For Example:
//
// Given [3, 1, 0, 5, 10]
//      - We begin at first position, 3. 
//      - Since the element is 3 we can take up to 3 steps from this position.
//      - This means we can step to the 1, 0, or 5
//      - Say we step to 1
//      - Since the element is 1, now the only option is to take 1 step to land on 0
//      - etc...
//
// Try to solve this in two ways, using tabulation and memoization.
//
// Examples:
//
// stepper([3, 1, 0, 5, 10]);           // => true, because we can step through elements 3 -> 5 -> 10

// stepper([3, 4, 1, 0, 10]);           // => true, because we can step through elements 3 -> 4 -> 10
// table:  [t, f, f, f, f]

// stepper([2, 3, 1, 1, 0, 4, 7, 8])    // => false, there is no way to step to the end
function stepper(nums) {
    let table = new Array(nums.length).fill(false);
    table[0] = true;

    for (let i = 0; i < nums.length; i++) {
        if (table[i]) {
            for(let j = i; j <= i + nums[i]; j++) {
                table[j] = true;
            } 
        }
    }
    return table[table.length -1];
}


// Write a function, maxNonAdjacentSum(nums), that takes in an array of nonnegative numbers.
// The function should return the maximum sum of elements in the array we can get if we cannot take
// adjacent elements into the sum.
//
// Try to solve this in two ways, using tabulation and memoization.
//
// Examples:
//
// maxNonAdjacentSum([2, 7, 9, 3, 4])   // => 15, because 2 + 9 + 4
//             table [0, 0, 0, 0, 0] 
// maxNonAdjacentSum([4,2,1,6])         // => 10, because 4 + 6 
function maxNonAdjacentSum(nums) {
    if (nums.length === 0)
        return 0;
    let table = new Array(nums.length).fill(0);
    table[0] = nums[0];
    for (let i = 1; i < nums.length; i++) {
        let skippedLeftNeighbor = table[i - 2] === undefined ? 0 : table[i - 2];
        let tookLeftNeighbor = table[i - 1];
        let sumIfPickCurrent = skippedLeftNeighbor + nums[i];
        table[i] = Math.max(tookLeftNeighbor, sumIfPickCurrent);
    }
    return Math.max(...table);
}


// Write a function, minChange(coins, amount), that accepts an array of coin values
// and a target amount as arguments. The method should the minimum number of coins needed
// to make the target amount. A coin value can be used multiple times.
//
// You've seen this problem before with memoization, but now solve it using the Tabulation strategy!
//
// Examples:
//
// minChange([1, 2, 5], 11)         // => 3, because 5 + 5 + 1 = 11
// minChange([1, 4, 5], 8))         // => 2, because 4 + 4 = 8
// minChange([1, 5, 10, 25], 15)    // => 2, because 10 + 5 = 15
// minChange([1, 5, 10, 25], 100)   // => 4, because 25 + 25 + 25 + 25 = 100
function minChange(coins, amount) {
    let table = new Array(amount + 1).fill(Infinity); //index of table refers to the amount
    table[0] = 0;

    // table[5] means how many ways to display $5
    // table[11] means how many ways to display $11;


    // [1, 4, 5], 8;
    
    coins.forEach(coin => {
        for (let amt = 0; amt < table.length; amt++) {
            for (let qty = 0; qty * coin <= amt; qty++) {
                let remainder = amt - qty * coin;
                let attempt = table[remainder] + qty;
                console.log(coin, qty, remainder, attempt, table);
                if (attempt < table[amt])
                table[amt] = attempt;
            }
        }
    });
    return table[table.length - 1];
}


module.exports = {
    stepper,
    maxNonAdjacentSum,
    minChange
};