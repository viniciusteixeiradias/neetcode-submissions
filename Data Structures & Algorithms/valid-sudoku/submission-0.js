class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = new Map()
        const cols = new Map()
        const squares = new Map()

        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                if (board[r][c] === ".") continue

                const val = board[r][c]
                const sk = `${Math.floor(r / 3)}-${Math.floor(c / 3)}`

                if (
                    rows.get(r)?.has(val) ||
                    cols.get(c)?.has(val) ||
                    squares.get(sk)?.has(val)
                ) {
                    return false
                }

                if (!rows.has(r)) rows.set(r, new Set())
                if (!cols.has(c)) cols.set(c, new Set())
                if (!squares.has(sk)) squares.set(sk, new Set())

                rows.get(r).add(val)
                cols.get(c).add(val)
                squares.get(sk).add(val)
            }
        }

        return true
    }
}