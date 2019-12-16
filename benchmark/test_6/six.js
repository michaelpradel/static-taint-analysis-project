function takeActions() {
  let x = retSource(),
    m = 0,
    obj = {
      'a1': [],
      'a2': []
    };
  let y = retSource(),
    z = 20,
    o = [];

  for (let i = 0; i < 10; i++) {
    sink(m);
    sink(z);
  }

  x = y + z + m;

  o.push(x);

  obj['a1'] = o;
  sink(obj);
}
