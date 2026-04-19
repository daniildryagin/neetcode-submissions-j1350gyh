class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const resList = [];
        let max;
        let max2;

        let left = 0;
        let right = 0;
        let num;

        while (right < nums.length) {
            if (right > k - 1) {
                num = nums[left];
                if (max === nums[left]) {
                    max = max2;
                    max2 = null;
                }
                left++;
            }

            num = nums[right];

            if (!max || num > max) {
                max = num;
            }
            else if (!max2 || num > max2) {
                max2 = num;
            }

            if (right > k - 2) {
                resList.push(max);
            }
            
            right++;
        }
        
        return resList;
    }
}
