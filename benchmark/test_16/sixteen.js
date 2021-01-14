function fCall() {
	var a = retSource();
	var b = 'abc';
	var c = 10;
	let d = foo(b, c) + a;
	sink(d);
}
