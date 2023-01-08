export const generateRandomNumbers = (id) => {
  const numbers = new Set();
  //To push the Current user id.
  numbers.add(id);

  while (numbers.size < 3) {
    numbers.add(Math.floor(Math.random() * 10) + 1);
  }
  return Array.from(numbers);
};

// num type is number, we must have to pass a number,
export const getTwoConsecutiveValues = (num) => {
  console.log("First");
  if (num >= 1 && num <= 8) {
    return [num + 1, num + 2];
  } else if (num === 9) {
    return [10, 1];
  } else if (num === 10) {
    return [1, 2];
  }
};

// console.log(getNextTwoValues(1));
// console.log(getNextTwoValues(2));
// console.log(getNextTwoValues(3));
// console.log(getNextTwoValues(4));
// console.log(getNextTwoValues(5));
// console.log(getNextTwoValues(6));
// console.log(getNextTwoValues(7));
// console.log(getNextTwoValues(8));
// console.log(getNextTwoValues(9));
// console.log(getNextTwoValues(10));
