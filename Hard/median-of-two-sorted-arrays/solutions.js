/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
*/

// Solution 1 : concat and sort

var findMedianSortedArrays = function(nums1, nums2) {
    let arr = nums1.concat(nums2).sort((a,b) => a - b)
    return arr.length % 2 !== 0 ? arr[(arr.length - 1)/2] : (arr[((arr.length)/2)] + arr[((arr.length)/2) - 1]) / 2
};

//Solution 2 : push and sort

var findMedianSortedArrays = function(nums1, nums2) {
    nums1.push(...nums2)
    nums1.sort((a,b) => a - b)

    return nums1.length % 2 !== 0 ? nums1[(nums1.length - 1)/2] : (nums1[((nums1.length)/2)] + nums1[((nums1.length)/2) - 1]) / 2
};

//Solution 3 : Fastest
var findMedianSortedArrays = function(nums1, nums2) {
    nums1.push(...nums2)
    nums1.sort((a,b) => a - b)

    let odd = nums1[(nums1.length - 1)/2], even = (nums1[((nums1.length)/2)] + nums1[((nums1.length)/2) - 1]) / 2

    return nums1.length % 2 !== 0 ? odd : even
};
