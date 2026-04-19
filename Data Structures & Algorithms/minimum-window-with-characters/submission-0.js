class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (s.length < t.length) return "";

        let left = 0;
        let right = 0;
        let needCount;
        let haveCount = 0;
        let minLength = Infinity;
        let resultRange = [-1, -1];

        const need = {};
        const have = {};

        for (let char of t) {
            need[char] = (need[char] ?? 0) + 1;
        }

        needCount = Object.keys(need).length;

        while (right < s.length) {
            let char = s[right];
            have[char] = (have[char] ?? 0) + 1;
            if (need[char] && need[char] === have[char]) {
                haveCount++;
            }

            while (left < s.length && haveCount === needCount) {
                let currentLength = right - left + 1;
                if (currentLength < minLength) {
                    minLength = currentLength;
                    resultRange = [left, right];
                }

                char = s[left];
                have[char]--;
                if (need[char] && have[char] < need[char]) {
                    haveCount--;
                }

                left++;
            }
            right++;
        }

        
        let [start, end] = resultRange;
        return minLength === Infinity ? "" : s.substring(start, end + 1);
    }
}
