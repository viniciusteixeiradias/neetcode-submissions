class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const lc = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "")
        let p1 = 0
        let p2 = lc.length - 1

        while (p1 < p2) {
            if (lc[p1] !== lc[p2]) {
                return false
            }

            p1++
            p2--
        }

        return true
    }
}
