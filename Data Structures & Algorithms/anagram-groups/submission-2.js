class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const m = new Map()

        for (const str of strs) {
            const count = new Array(26).fill(0)

            for (const s of str) {
                count[s.charCodeAt(0) - 'a'.charCodeAt(0)] += 1
            }

            const k = String(count)
            m.set(k, [...(m.get(k) ?? []), str])
        }

        return [...m.values()]
    }
}
