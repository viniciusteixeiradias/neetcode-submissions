class Solution {
    isAlphaNum(c) {
        return (
            ('A'.charCodeAt() <= c.charCodeAt() && c.charCodeAt() <= 'Z'.charCodeAt()) ||
            ('a'.charCodeAt() <= c.charCodeAt() && c.charCodeAt() <= 'z'.charCodeAt()) ||
            ('0'.charCodeAt() <= c.charCodeAt() && c.charCodeAt() <= '9'.charCodeAt())
        )
    }
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const lc = s.toLowerCase()
        let l = 0, r = lc.length - 1
        
        while (l < r) {
            while (l < r && !this.isAlphaNum(lc[l])) {
                l++
            }

            while (r > l && !this.isAlphaNum(lc[r])) {
                r--
            }

            if (lc[l] !== lc[r]) {
                return false
            }

            l++
            r--
        }

        return true
    }
}
