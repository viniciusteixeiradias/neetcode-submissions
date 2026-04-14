class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false
        }

        const sSorted = s.split('').sort().join('')
        const tSorted = t.split('').sort().join('')

        for (let i = 0; i < sSorted.length; i++) {
            if (sSorted[i] !== tSorted[i]) {
                return false
            }
        }

        return true
    }
}
