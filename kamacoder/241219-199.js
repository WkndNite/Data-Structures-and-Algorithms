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
	const target = inputs[0].split(" ").map(Number)[1];
	const orgArr = inputs[1].split(" ").map(Number);
	let product = 1;
	for (const item of orgArr) product *= item;
    let cnt=0;
    // 得到所有的subProduct
    const sub = []
    for(const item of sub){
        const _pow = Math.pow(10,target)
        const _division = product/item;
        if(_division/_pow===Math.floor(_division/_pow))cnt++
    }
    console.log(cnt)
}
