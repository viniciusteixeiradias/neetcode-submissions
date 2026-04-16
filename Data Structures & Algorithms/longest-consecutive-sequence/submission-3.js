class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        // [2,20,4,10,3,4,5]
        const s = new Set(nums)
        let ans = 0

        for (let i = 0; i < nums.length; i++) {
            let size = 1
            if (!s.has(nums[i] - 1)) {
                while (s.has(nums[i] + size)) {
                    size++
                }
            }

            ans = Math.max(ans, size)
        }

        return ans
    }
}
