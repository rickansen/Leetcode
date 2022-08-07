/**
 * @param {number[]} nums
 * @return {boolean}
 */

const containsDuplicate = (nums) => Array.from(new Set(nums)).length < nums.length
