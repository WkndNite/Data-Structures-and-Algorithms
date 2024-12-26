const init = () => {
	return new Promise(resolve => {
		const rl = require("readline").createInterface({
			input: process.stdin,
			output: process.stdout,
		});

		rl.on("line", line => {
			resolve(line);
			rl.close();
		});
	});
};

function isNum(s) {
	const code0 = "0".charCodeAt(0);
	const code9 = "9".charCodeAt(0);
	return s.charCodeAt(0) >= code0 && s.charCodeAt(0) <= code9;
}

function getNumCnt(string) {
	let cnt = 0;
	for (const s of string) {
		if (isNum(s)) cnt++;
	}
	return cnt;
}

(async () => {
	const originalString = await init();
	const newLen = originalString.length + getNumCnt(originalString) * 5;
	const resArr = new Array(newLen);
	let originalIndex = originalString.length - 1;
	let newIndex = newLen - 1;
	debugger;

	while (newIndex >= 0 && originalIndex >= 0) {
		let curS = originalString[originalIndex];
		if (isNum(curS)) {
			resArr[newIndex--] = "r";
			resArr[newIndex--] = "e";
			resArr[newIndex--] = "b";
			resArr[newIndex--] = "m";
			resArr[newIndex--] = "u";
			resArr[newIndex--] = "n";
		} else {
			resArr[newIndex--] = curS;
		}
		originalIndex--;
	}
	console.log(resArr.join(""));
})();
