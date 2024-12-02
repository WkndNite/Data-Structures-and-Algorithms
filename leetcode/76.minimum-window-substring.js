/*
 * @lc app=leetcode id=76 lang=javascript
 *
 * [76] Minimum Window Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
	let targetCnt = new Map();
	for (let char of t) {
		targetCnt.set(char, 1 + (targetCnt.get(char) || 0));
	}
	// 👆 store match target and related cnt
	// 👉 to statistic t

	let left = 0, // the left border of window when sliding
		minLen = Infinity, // the length of result
		start = 0, // the index of the first position of result
		required = targetCnt.size, // the length of result
		windowCnt = new Map(), // to statistic s
		finished = 0;

	for (let right = 0; right < s.length; right++) {
		let char = s[right];
		windowCnt.set(char, (windowCnt.get(char) || 0) + 1);

		if (targetCnt.has(char) && windowCnt.get(char) === targetCnt.get(char))
			finished++;

		while (finished === required) {
			// 👆 when satisfying the length of result
			let curWinLen = right - left + 1;
			if (curWinLen < minLen) {
				// 👇 record current length and start index
				// ❓ return or not
				minLen = curWinLen;
				start = left;
			}

			// cause satisfaction ===> slide
			let leftChar = s[left];
			windowCnt.set(leftChar, windowCnt.get(leftChar) - 1);

			// update condition once not satisfied
			if (
				targetCnt.has(leftChar) &&
				windowCnt.get(leftChar) < targetCnt.get(leftChar)
			) {
				finished--;
			}
			left++;
		}
	}
	return minLen === Infinity ? '' : s.slice(start, start + minLen);
};
// @lc code=end
