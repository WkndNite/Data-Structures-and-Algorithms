/*
 * @lc app=leetcode id=54 lang=javascript
 *
 * [54] Spiral Matrix
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    let rowLen = matrix.length;
    if (rowLen === 0) return [];
    let colLen = matrix[0].length;
    let res = [];
    let startX = 0, startY = 0;
    let endX = rowLen - 1, endY = colLen - 1;

    while (startX <= endX && startY <= endY) {
        // 从左到右
        for (let col = startY; col <= endY; col++) {
            res.push(matrix[startX][col]);
        }
        startX++;

        // 从上到下
        for (let row = startX; row <= endX; row++) {
            res.push(matrix[row][endY]);
        }
        endY--;

        if (startX <= endX) {
            // 从右到左
            for (let col = endY; col >= startY; col--) {
                res.push(matrix[endX][col]);
            }
            endX--;
        }

        if (startY <= endY) {
            // 从下到上
            for (let row = endX; row >= startX; row--) {
                res.push(matrix[row][startY]);
            }
            startY++;
        }
    }

    return res;
};
// @lc code=end
