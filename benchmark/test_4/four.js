function calculations() {
  let income_tax = 0.3 * retSource() * 0.5;
  let extra = income_tax + 10,
    final = 0;

  if (income_tax < 200)
    final = extra - 10;
  else
    final = extra + 10;

  sink(final);
}
