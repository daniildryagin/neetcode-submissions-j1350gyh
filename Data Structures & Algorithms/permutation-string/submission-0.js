class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) return false;

        const s1Count = new Array(26).fill(0);
        const s2Count = new Array(26).fill(0);

        for (let i = 0; i < s1.length; i++) {
            s1Count[s1.charCodeAt(i) - 97]++;
            s2Count[s2.charCodeAt(i) - 97]++;
        }

        const matches = (arr1, arr2) => {
            for (let i = 0; i < 26; i++) {
                if (arr1[i] !== arr2[i]) {
                    return false;
                }
            }
            return true;
        }

        for (let i = 0; i < s2.length - s1.length; i++) {
            if (matches(s1Count, s2Count)) {
                return true;
            }

            s2Count[s2.charCodeAt(i + s1.length) - 97]++;
            s2Count[s2.charCodeAt(i) - 97]--;
        }

        return matches(s1Count, s2Count);
    }
}
