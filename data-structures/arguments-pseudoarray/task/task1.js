// Как в функции отличить отсутствующий аргумент от `undefined`?

function f(x) {
	return arguments.length == 0 ? 0 : 1;
}

console.log(f(undefined)); // 1
console.log(f()); // 0