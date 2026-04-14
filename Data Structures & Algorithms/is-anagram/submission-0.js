class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // s = "racecar", t = "carrace"
        if (s.length !== t.length) {
            return false
        }        

        const m = new Map()

        for (const char of s) {
            if (m.has(char)) {
                m.set(char, m.get(char) + 1)
            } else {
                m.set(char, 1)
                // r - 1
                // r - 1, a - 1
                // r - 1, a - 1, c - 1
                // r - 1, a - 1, c - 1, e - 1
                // r - 1, a - 1, c - 2, e - 1
                // r - 1, a - 2, c - 2, e - 1
                // r - 2, a - 2, c - 2, e - 1
            }
        }

        for (const char of t) {
            if (!m.has(char)) {
                return false
            }

            m.set(char, m.get(char) - 1)
            // r - 2, a - 2, c - 1, e - 1
            // r - 2, a - 1, c - 1, e - 1
            // r - 1, a - 1, c - 1, e - 1
            // a - 1, c - 1, e - 1
            // c - 1, e - 1
            // e - 1

            if (m.get(char) <= 0) {
                m.delete(char)    
            }
        }

        return m.size === 0
    }
}
