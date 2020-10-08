import { swap } from './Utils';
import { pad } from '../hooks/initBits';
export const getRadixSortAnimations = (array) => {
  const animations = [];
  if (array.length < 2) {
    return array;
  }
  radixSort(array, 0, array.length - 1, animations, 5, 1);
  return animations;
};

function radixSort(array, left, right, animations, nrBits, paddingForName) {
  if (right > left && nrBits >= 0) {
    let i = left;
    let j = right;
    do {
      while (getKthBit(array[i], nrBits) === 0 && i < j) {
        i++;
      }

      while (getKthBit(array[j], nrBits) === 1 && i < j) {
        j--;
      }
      if (i < j) {
        animations.push([
          i,
          pad(array[i].toString(2), 6) + pad(1, paddingForName),
          1,
          pad(array[j].toString(2), 6) + pad(0, paddingForName),
        ]);
        animations.push([
          i,
          pad(array[i].toString(2), 6) + pad(1, paddingForName),
          1,
          pad(array[j].toString(2), 6) + pad(0, paddingForName),
        ]);
      }

      swap(array, animations, i, j);
    } while (j !== i);

    if (getKthBit(array[right], nrBits) === 0) {
      j++;
    }
    radixSort(array, left, j - 1, animations, nrBits - 1, paddingForName + 1);
    radixSort(array, j, right, animations, nrBits - 1, paddingForName + 1);
  }
}

export function getKthBit(x, k) {
  return (x >> k) & 1;
}
