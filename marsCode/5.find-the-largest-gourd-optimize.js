function solution(n, max, array) {
	const cntMap = array.reduce((acc, cur) => {
		acc.set(cur, 1 + (acc.get(cur) || 0));
		return acc;
	}, new Map());

	const cards = [1, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2];
	for (let i = 0; i < cards.length; i++)
		for (let j = 0; j < cards.length; j++)
			if (
				cntMap.get(cards[i]) >= 3 &&
				cntMap.get(cards[j]) >= 2 &&
				3 * cards[i] + 2 * cards[j] <= max &&
				cards[i] !== cards[j]
			)
				return [cards[i], cards[j]];

	return [0, 0];
}
