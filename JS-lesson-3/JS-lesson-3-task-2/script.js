const createDebounceFunction = function(fn, time) {
	let timeout;
	return (...args) => {
		clearTimeout(timeout);
		timeout = setTimeout(() => {fn.apply(this, args); }, time);
	}
}