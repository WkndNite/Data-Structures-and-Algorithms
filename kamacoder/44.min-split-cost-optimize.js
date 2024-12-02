var getMatrix = function () {
	return new Promise((resolve) => {
		const rl = require('readline').createInterface({
			input: process.stdin,
			output: process.stdout,
		});
		const inputLines = [];
		rl.on('line', (line) => {
			inputLines.push(line.trim().split(' ').map(Number));
		});
		rl.on('close', () => {
			const matrix = inputLines.slice(1);
			resolve(matrix);
		});
	});
};

var minSplitCost = function (matrix) {
	const row = matrix.length;
	const col = matrix[0].length;

	let sum = 0;
	for (let i = 0; i < row; i++) {
		for (let j = 0; j < col; j++) {
			sum += matrix[i][j];
		}
	}

	let cnt = 0;
	let result = Infinity;
	for (let i = 0; i < row; i++) {
		for (let j = 0; j < col; j++) {
			cnt += matrix[i][j];
			if (j === col - 1) {
				result = Math.min(result, Math.abs(sum - 2 * cnt));
			}
		}
	}
	cnt = 0;
	for (let j = 0; j < col; j++) {
		for (let i = 0; i < row; i++) {
			cnt += matrix[i][j];
			if (i === row - 1) {
				result = Math.min(result, Math.abs(sum - 2 * cnt));
			}
		}
	}
	return result;
};

(async function () {
	const matrix = await getMatrix();
	const cost = minSplitCost(matrix);
	console.log(cost);
})();
