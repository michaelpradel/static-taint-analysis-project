function getInformation() {
  let input = retSource();
  let q = 'SELECT * FROM ' + input;
  let len = 20;
  if (q.length > len) {
    let ans = sink(q);
  }
}
