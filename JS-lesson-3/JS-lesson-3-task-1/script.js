Array.prototype.myFilter = function(callback, obj) {
	let array = [];
	for (let ind = 0; ind < this.length; ind++) {
		if (callback(this[ind], ind, array) === true) {
			array.push(this[ind]);
		}
	}
	return array;
}