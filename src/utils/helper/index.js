export const generateRandomNumbers = (id) => {
  const numbers = new Set();
  //To push the Current user id.
  numbers.add(id);

  while (numbers.size < 4) {
    numbers.add(Math.floor(Math.random() * 10) + 1);
  }
  return Array.from(numbers);
};
