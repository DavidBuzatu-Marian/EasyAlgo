export const getRadixStraightAnimations = (array) => {
  const animations = [];
  if (array.length < 2) {
    return array;
  }
  radixStraight(array, array.length, animations);
  return animations;
};

const radixStraight = (array, arrLength, animations) => {
  let i = 0,
    nrBits = 6,
    mask = 2,
    nrPasses = 0;
  for (nrPasses = 0; nrPasses < nrBits / mask; nrPasses++) {
    let counter = 0;
    let tableCount = { 0: [], 1: [], 2: [], 3: [] };
    for (i = 0; i < arrLength; i++) {
      let key = getMBits(array[i], mask, nrPasses * mask).toString();
      tableCount[key].push(array[i]);
      animations.push([key, array[i], 1]);
      animations.push([key, array[i], 1]);
    }

    for (var key in tableCount) {
      while (tableCount[key].length > 0) {
        array[counter++] = tableCount[key].shift();
        animations.push([key, array[counter - 1], 0]);
        animations.push([key, array[counter - 1], 0]);
      }
    }
  }
};

const getMBits = (number, m, shiftValue) => {
  return (number >> shiftValue) & ~(~0 << m);
};
