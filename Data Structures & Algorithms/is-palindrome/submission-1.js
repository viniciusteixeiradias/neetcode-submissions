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
        let l = 0, r = s.length - 1
        while (l < r) {
            while (l < r && !this.isAlphaNum(s[l])) {
                l++
            }

            while (r > l && !this.isAlphaNum(s[r])) {
                r--
            }

            if (s[l].toLowerCase() !== s[r].toLowerCase()) {
                return false
            }

            l++
            r--
        }

        return true
    }
}
