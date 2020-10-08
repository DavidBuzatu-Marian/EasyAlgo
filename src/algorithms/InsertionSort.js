import { swap } from './Utils';

export function getInsertionSortAnimations(array) {
  const animations = [];
  if (array.length < 2) {
    return array;
  }
  insertionSort(array, array.length, animations);
  return animations;
}

function insertionSort(array, length, animations) {
  let i, j;
  for (i = 1; i < length; ++i) {
    for (j = i; j > 0 && array[j - 1] > array[j]; --j) {
      animations.push([j - 1, j, 1]);
      animations.push([j - 1, j, 1]);
      swap(array, animations, j, j - 1);
    }
  }
}
