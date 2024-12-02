var getMatrix = function (callback) {
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
		callback(matrix);
	});
};

var minSplitCost = function (matrix) {
	const row = matrix.length;
	const col = matrix[0].length;

	let sum = 0;
	const horizontal = Array(row).fill(0);
	const vertical = Array(col).fill(0);

	for (let i = 0; i < row; i++) {
		for (let j = 0; j < col; j++) {
			sum += matrix[i][j];
			horizontal[i] += matrix[i][j];
			vertical[j] += matrix[i][j];
		}
	}

	let result = Infinity;

	let horizontalCut = 0;
	for (let i = 0; i < row; i++) {
		horizontalCut += horizontal[i];
		result = Math.min(result, Math.abs(sum - 2 * horizontalCut));
	}

	let verticalCut = 0;
	for (let j = 0; j < col; j++) {
		verticalCut += vertical[j];
		result = Math.min(result, Math.abs(sum - 2 * verticalCut));
	}

	return result;
};

getMatrix((matrix) => {
	const result = minSplitCost(matrix);
	console.log(result);
});
