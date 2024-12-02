const rl = require('readline').createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
	// Write your code here
	while ((line = await readline())) {
		let tokens = line.split(' ');
		let a = parseInt(tokens[0]);
		let b = parseInt(tokens[1]);
		console.log(a + b);

		const res = check(nodeModules);
		console.log(res);
	}
})();

// nodeModules [ {} {} {} ]
function check(nodeModules){
    const marked = []
    const flatMap = new Map();
    for(let i = 0;i<nodeModules.length;i++){
        
        let element = nodeModules[i]
        let key = `${element.name}${element.v}`
        let value = new Array();
        if(element.deps){
            for(let j=0;j<element.deps.keys().length;j++){
                let depName = element.deps.keys()[j]
                let depVersion = element.deps[depName]
                let dep = `${depName}${depVersion}`
                value.push(dep)
                marked.push(dep)
            }
        }
        if(!marked.includes(key)){flatMap.set(key,value)}
    }
    nodeModules.forEach(element => {
        let key = `${element.name}${element.v}`
        let value = new Map();

        

        flatMap.set(key,value)
    })
}
