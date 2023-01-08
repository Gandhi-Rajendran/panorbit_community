export const generateRandomNumbers = (id) => {
  const numbers = new Set();
  //To push the Current user id.
  numbers.add(id);

  while (numbers.size < 3) {
    numbers.add(Math.floor(Math.random() * 10) + 1);
  }
  return Array.from(numbers);
};

export const getNextTwoValues = (num) => {
  if (num >= 1 && num <= 8) {
    return [num, num + 1, num + 2];
  } else if (num === 9) {
    return [num, 10, 1];
  } else if (num === 10) {
    return [num, 1, 2];
  }
};
