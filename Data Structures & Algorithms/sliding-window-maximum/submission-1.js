class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const res = [];
        const max = [];

        let num;

        for (let i = 0; i < nums.length; i++) {
            if (max.length > 0 && max[max.length - 1] === i - k) {
                max.pop();
            }

            while (max.length > 0 && nums[max[0]] <= nums[i]) {
                max.shift();
            }

            max.unshift(i);

            if (i >= k - 1) {
                res.push(nums[max[max.length - 1]]);
            }
        }
        return res;
    }
}
