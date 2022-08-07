/**
 * @param {number[]} nums
 * @return {number[]}
*/
var productExceptSelf = function(nums) {
    return nums.map((x,y,z) => {
        let ans = z.map((a,b) => y === b ? 1 : a).reduce((a,b) => a*b) 
        return ans === 0 ? 0 : ans
    })
};

console.log(
    productExceptSelf([1,2,3,4]), [24,12,8,6])
console.log(
    productExceptSelf([-1,1,0,-3,3]), [0,0,9,0,0])
