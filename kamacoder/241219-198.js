const rl = require("readline").createInterface({
	input: process.stdin,
	output: process.stdout,
});

const inputs = [];

rl.on("line", line => {
	inputs.push(line);
}).on("close", () => {
	deal(inputs);
});

function deal(inputs) {
	const size = parseInt(inputs[0]);

	const matrix = [];

	for (let row = 0; row < size; row++) {
		matrix.push(inputs[1 + row].split("").map(Number));
	}
	for (let row = 0; row < size; row++) {
		console.log(_deal(matrix, row + 1));
	}
	function _deal(matrix, row) {
		let count = 0;
		const size = matrix.length;
		const prefixSum = new Array(size)
			.fill(0)
			.map(() => new Array(size).fill(0));

		for (let i = 0; i < size; i++) {
			for (let j = 0; j < size; j++) {
				prefixSum[i][j] =
					matrix[i][j] +
					(i > 0 ? prefixSum[i - 1][j] : 0) +
					(j > 0 ? prefixSum[i][j - 1] : 0) -
					(i > 0 && j > 0 ? prefixSum[i - 1][j - 1] : 0);
			}
		}

		for (let i = 0; i < size - row + 1; i++) {
			for (let j = 0; j < size - row + 1; j++) {
				let sum = prefixSum[i - 1 + row][j - 1 + row];
				if (i > 0) sum -= prefixSum[i - 1][j - 1 + row];
				if (j > 0) sum -= prefixSum[i - 1 + row][j - 1];
				if (i > 0 && j > 0) sum += prefixSum[i - 1][j - 1];

				if (sum === (row * row) / 2) count++;
			}
		}

		return count;
	}
}
