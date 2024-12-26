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
	const [len, times] = inputs[0].split(" ").map(Number);
	const arr = inputs[1].split(" ").map(Number);
	let sum = 0;
	let cnt = 0;
	for (const number of arr) {
		number !== 0 ? (sum += number) : cnt++;
	}
	for (let i = 0; i < times; i++) {
		const [left, right] = inputs[2 + i].split(" ").map(Number);
		const min = sum + cnt * left;
		const max = sum + cnt * right;
		console.log(min,max);
	}
}
