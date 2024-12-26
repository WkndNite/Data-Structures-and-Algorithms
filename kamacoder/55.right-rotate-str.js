const rl = require("readline").createInterface({
	input: process.stdin,
	output: process.stdout,
});

const inputs = [];

rl.on("line", line => {
	inputs.push(line);
}).on("close", () => {
	const res = deal(inputs);
	console.log(res);
});

function deal(inputs) {
	let [num, str] = inputs;
	const len = str.length;
	num = parseInt(num);

	str = str.split("");

	str = reverse(str, 0, len-1);
	str = reverse(str, 0, num-1);
	str = reverse(str, num, len-1);

    return str.join("")
}

function reverse(s, start, end) {
	while (start < end) {
		[s[start], s[end]] = [s[end], s[start]];
		start++;
		end--;
	}
	return s;
}
