class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const m = new Map()
        const a = Array.from({ length: nums.length + 1 }, () => [])

        for (const n of nums) {
            m.set(n, (m.get(n) ?? 0) + 1)
        }

        for (const [k, v] of m.entries()) {
            a[v].push(k)
        }

        const res = []
        for (let i = a.length-1; i >= 0; i--) {
            for (const n of a[i]) {
                res.push(n)

                if (res.length === k) {
                    return res
                }
            }
        }

        return []
    }
}
