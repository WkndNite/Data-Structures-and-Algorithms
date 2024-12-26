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
	const str = inputs[1];
	let cnt = 0;
	for (const s of str) if (s === "M" || s === "T") cnt++;
	const res = cnt + times > len ? len : cnt + times;
	console.log(res);
}
