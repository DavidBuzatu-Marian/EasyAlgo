import { swap } from './Utils';

export const getQuickSortAnimations = (array) => {
  const animations = [];
  if (array.length < 1) {
    return array;
  }
  quickSort(array, animations, 0, array.length - 1);
  return animations;
};

const quickSort = (items, animations, left, right) => {
  var index;
  if (items.length > 1) {
    index = partition(items, animations, left, right);
    if (left < index - 1) {
      quickSort(items, animations, left, index - 1);
    }
    if (index < right) {
      quickSort(items, animations, index, right);
    }
  }
  return items;
};

const partition = (items, animations, left, right) => {
  let middleCoord = Math.floor((right + left) / 2);
  let pivot = items[middleCoord],
    i = left,
    j = right;
  while (i <= j) {
    middleCoord = items.indexOf(pivot);
    while (items[i] < pivot) {
      animations.push([i, middleCoord, 1]);
      animations.push([i, middleCoord, 1]);
      i++;
    }
    while (items[j] > pivot) {
      animations.push([j, middleCoord, 1]);
      animations.push([j, middleCoord, 1]);
      j--;
    }
    if (i <= j) {
      swap(items, animations, i, j);
      i++;
      j--;
    }
  }
  return i;
};
