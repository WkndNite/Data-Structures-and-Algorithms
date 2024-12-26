const initMap = array => {
	return array.reduce((acc, cur) => {
		acc[cur] = 1 + (acc[cur] || 0);
		return acc;
	}, {});
};

const compare = arrays => {
	if (!arrays.length) return [0, 0];
	const map = {};
	let max = 0;
	for (const array of arrays) {
		const sum = array.reduce(
			(acc, cur) => (cur === 1 ? acc + 14 : acc + cur),
			0
		);
		// max = max > sum ? max :sum;
		if (!map[sum] || map[sum][0] < array[0]) map[sum] = array;
	}
	// 应该返回的是map的值index=0最大的而且该项key也最大
	let maxAcard = 0;
	for (const key in map) {
		maxAcard =
			map[key][0] > maxAcard || map[key][0] === 1
				? map[key][0]
				: maxAcard;
	}
	for (const key in map) {
		if (map[key][0] !== maxAcard) delete map[key];
	}
	for (const key in map) {
		max = key > max ? key : max;
	}
	const res = Array.from(new Set(map[max]));
	return res;
};

function solution(n, max, array) {
	const cardMap = initMap(array);
	const cards = Array.from(new Set(array))
		.sort((a, b) => a - b)
		.filter(card => cardMap[card] !== 1);
	// 如果出现次数大于等于2的牌面不足两种 必然返回找不到
	if (cards.length <= 1) return [0, 0];
	const result = new Array();
	for (let i = cards.length - 1; i >= 0; i--) {
		for (let j = cards.length - 1; j >= 0; j--) {
			if (
				cards[i] !== cards[j] &&
				cardMap[cards[i]] >= 3 &&
				cardMap[cards[j]] >= 2
			) {
				const sum = 3 * cards[i] + 2 * cards[j];
				if (sum <= max)
					result.push([
						cards[i],
						cards[i],
						cards[i],
						cards[j],
						cards[j],
					]);
			}
		}
	}
	return compare(result);
}
