/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
*/

//Solution 1
var twoSum = function(nums, target) {
    let arr = []
    for (let i = 0; i< nums.length; i++) {
        for (let j = 0; j< nums.length; j++) {
            if (i !== j && nums[i] + nums[j] === target) arr.push(i,j)
        }
    }
    return arr.slice(0,2)
};

//Solution2 
var twoSum = function(nums, target) {
    return nums.map((x,y)=> [y,nums.findIndex(a => a === target - x)]).filter(x => !x.includes(-1) && new Set(x).size > 1)[0].sort()
};





