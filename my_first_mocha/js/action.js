
function doSomething ( a , b ) {
	a = a || 0;
	b = b || 0;

	return a + b;
}

module.exports = doSomething