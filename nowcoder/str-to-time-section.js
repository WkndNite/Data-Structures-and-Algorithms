const rl = require('readline').createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

function toggleHour(item) {
	const num = parseInt(item);
	const hour = Math.floor(num / 2);
	return hour > 9 ? `${hour}` : `0${hour}`;
}

function toggleMin(item) {
	const num = parseInt(item);
	return num % 2 === 0 ? '00' : '30';
}

function toggleTime(left, right) {
	return left !== right
		? `${toggleHour(+left)}:${toggleMin(+left)}~${toggleHour(+right+1)}:${toggleMin(+right+1)}`
		: `${toggleHour(+left)}:${toggleMin(+left)}~${toggleHour(+left + 1)}:${toggleMin(+left + 1)}`;
}

void (async function () {
	while ((line = await readline())) {
		let tokens = line.split(' ');
		let timeStr = tokens[0];
		let timeZone = [];

		for (let left = 0; left < 48; left++) {
			if (timeStr[left] !== '1') continue;
			let right = left;
			while (timeStr[right] === '1') {
				right++;
			}
			const section = []
			section.push(left)
			section.push(right-1)
			timeZone.push(section)
			left = right;
			continue;
		}
		let result = ``;
		timeZone.forEach(section=>{
			const [left,right] = [section[0],section[1]]
			result += toggleTime(left,right)
			result += ';'
		})
		result = result.slice(0,result.length-1)
		console.log(result)

	}
})();
