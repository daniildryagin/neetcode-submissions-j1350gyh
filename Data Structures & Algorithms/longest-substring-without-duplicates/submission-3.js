class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const strSet = new Set();
        let left = 0;
        let max = 0;

        for (let right = 0; right < s.length; right++) {
            while (strSet.has(s[right])) {
                strSet.delete(s[left]);
                left++;
            }
            
            strSet.add(s[right]);
            max = Math.max(max, strSet.size);

        }

        return max;
    }
}
