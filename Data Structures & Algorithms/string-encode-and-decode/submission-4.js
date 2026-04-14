class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        const res = []

        for (const s of strs) {
            res.push(s.length + "#" + s)
        }

        return res.join('')
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const res = []
        let i = 0

        while (i < str.length) {
            let j = i

            while (str[j] !== "#") {
                j += 1
            }

            const length = Number(str.slice(i, j))
            res.push(str.slice(j + 1, j + 1 + length))
            i = j + 1 + length
        }

        return res
    }
}
