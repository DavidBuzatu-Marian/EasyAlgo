import { swap } from './Utils';

export function getBubbleSortAnimations(array) {
  const animations = [];
  if (array.length < 2) {
    return array;
  }

  bubbleSort(array, array.length, animations);
  return animations;
}

function bubbleSort(array, arrayLength, animations) {
  for (let i = 0; i < arrayLength; i++) {
    for (let j = 0; j < arrayLength - 1 - i; j++) {
      animations.push([j, j + 1, 1]);
      animations.push([j, j + 1, 1]);
      if (array[j] > array[j + 1]) {
        swap(array, animations, j, j + 1);
      }
    }
  }
}
