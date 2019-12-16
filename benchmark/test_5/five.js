function doAction() {
  let input = retSource();

  switch (input) {
    case 'x':
      sink(input);
      break;
    case 'y':
      let next_input = retSource()
      let final_input = input + next_input;
      sink(final_input);
      break;
    default:
      console.log('Nothing to do');
  }
}
