class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let min = prices[0];
        let maxProfit = 0;

        for (let i = 1; i < prices.length; i++) {
            let currentPrice = prices[i];

            if (currentPrice < min) {
                min = currentPrice;
            }
            else {
                const currentProfit = currentPrice - min;
                if (currentProfit > maxProfit) {
                    maxProfit = currentProfit;
                }
            }
        }

        return maxProfit;
    }
}
