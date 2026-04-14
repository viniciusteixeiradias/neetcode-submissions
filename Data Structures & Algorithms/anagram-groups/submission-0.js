class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // create a map using the sorted string as key (and sort whenever checking)
        // if the curr string sorted is already in the map, then push the new value
        // else start a new group
        // return maps.values

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
