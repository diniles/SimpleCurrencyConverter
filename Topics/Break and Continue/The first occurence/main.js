function find5(numbers) {
  // change it
  let result = -1;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] == 5) {
      result = i;
      break;
    }
  }
  return result;
}
