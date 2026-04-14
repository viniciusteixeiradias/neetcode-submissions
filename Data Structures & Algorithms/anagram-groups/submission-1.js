class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const _sort = (str) => str.split('').sort().join('')

        const m = new Map()

        for (let i = 0; i < strs.length; i++) {
            const currVal = strs[i]
            const currKey = _sort(strs[i])

            if (m.has(currKey)) {
                m.set(currKey, [...m.get(currKey), currVal])
            } else {
                m.set(currKey, [currVal])
            }
        }

        return [...m.values()]
    }
}
