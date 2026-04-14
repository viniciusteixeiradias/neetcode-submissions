class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const m = new Map()
        m.set(nums[0], 0)

        for (let i = 1; i < nums.length; i++) {
            const result = target - nums[i]
            if (m.has(result)) {
                return [m.get(result), i]
            }

            m.set(nums[i], i)
        }

        return []
    }
}
