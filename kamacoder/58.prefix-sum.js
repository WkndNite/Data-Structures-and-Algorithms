/*
 * app=kamacoder id=58 lang=javascript
 */

var prefixSum = function () {
	const readLine = require('readline');
	const rl = readLine.createInterface({
		input: process.stdin,
		output: process.stdout,
	});

	let inputLines = [];
	rl.on('line', (line) => {
		inputLines.push(line.trim());
	});

	rl.on('close', () => {
		const n = parseInt(inputLines[0]);

		let sum = new Array(n);
		sum[0] = parseInt(inputLines[1]);

		for (let i = 1; i < n; i++) {
			sum[i] = sum[i - 1] + parseInt(inputLines[i + 1]);
		}

		for (let i = n + 1; i < inputLines.length; i++) {
			let [left, right] = inputLines[i].split(' ').map(Number);

			left === 0
				? console.log(sum[right])
				: console.log(sum[right] - sum[left - 1]);
		}
	});
};

prefixSum();
