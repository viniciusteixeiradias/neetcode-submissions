class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const sorted = [...new Set(nums.sort((a, b) => a - b)).values()]
        console.log(sorted)
        
        let i = 0
        let ans = 0
        let count = 1

        while (i < sorted.length) {
            if (sorted[i-1] === sorted[i] - 1) {
                count++
            } else {
                count = 1
            }

            ans = Math.max(ans, count)
            i++
        }

        return ans
    }
}
