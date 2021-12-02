/* The "average" number; 
found by adding all data points and dividing by the number of data points. */

function mean(nums) {
    total = 0;

    if (nums.length === 0) return total;

    nums.forEach((num) => {
        total += num;
    });

    return +(total / nums.length).toFixed(2);
}

/*
The middle number; 
found by ordering all data points and picking out the one in the middle 
(or if there are two middle numbers, taking the mean of those two numbers) 
*/
function median(nums) {
    nums.sort();
    const midInd = Math.floor(nums.length / 2);

    if (nums.length % 2) {
        return nums[midInd];
    }

    return (nums[midInd - 1] + nums[midInd]) / 2;
}

/* 
The most frequent number—that is, the number that occurs the highest number of times.
*/
function mode(nums) {
    let numFrequency = new Map();

    for (num of nums) {
        numFrequency.get(num)
            ? numFrequency.set(num, numFrequency.get(num) + 1)
            : numFrequency.set(num, 1);
    }

    let highestValue = 0;
    let highestValueKey;

    for (let key of numFrequency.keys()) {
        if (numFrequency.get(key) > highestValue) {
            highestValueKey = key;
            highestValue = numFrequency.get(key);
        }
    }

    return +highestValueKey;
}

function convertToNumber(stringNumbers) {
    let nums = [];
    for (e of stringNumbers) {
        if (Number(e)) {
            nums.push(e);
        } else {
            return new Error(`${e} is not a Number`);
        }
    }
    return nums;
}

module.exports = { mean, median, mode, convertToNumber };
