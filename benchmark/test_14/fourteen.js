function manyBranches() {
	var a = retSource();
	var b = 'abc';
	var c = 10;
	let d;
	if (c > 50) {
		d = a + b;
	} else if (b.length == 100) {
		d = c + c;
		if (d === 25) {
			d = a;
		} else {
			d = a + c;
		}
	}
	sink(d);
}
