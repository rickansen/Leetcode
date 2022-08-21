/**
 * @param {number[]} nums
 * @return {number}
*/

var singleNumber = function(nums) {
    return Array.from(new Set(nums)).map(x => [x, nums.filter(a => a === x).length]).filter(x => x[1] === 1)[0][0]
};

