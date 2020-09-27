import { swap } from './Utils';

export function getHeapSortAnimations(array) {
  const animations = [];
  if (array.length < 2) {
    return array;
  }
  heapSort(array, array.length, animations);
  return animations;
}

function compareParentWithChildren(array, length, index, animations) {
  let parent = index;
  let left = index * 2 + 1;
  let right = left + 1;
  /* check if left child is greater. If it is
   * parent will take its index.
   * check if left is smaller than length
   * in order to not compare with already sorted nodes
   */
  if (left < length) {
    animations.push([left, parent, 1]);
    animations.push([left, parent, 1]);
    if (array[left] > array[parent]) {
      parent = left;
    }
  }
  /* check if right child is greater. If it is
   * parent will take its index
   */
  if (right < length) {
    animations.push([right, parent, 1]);
    animations.push([right, parent, 1]);
    if (array[right] > array[parent]) {
      parent = right;
    }
  }
  /* check if we found another value greater than initial parent
   * swap values and recall function
   */
  animations.push([parent, index, 1]);
  animations.push([parent, index, 1]);
  if (parent !== index) {
    swap(array, animations, index, parent);
    /* check if nodes below are still in right order */
    compareParentWithChildren(array, length, parent, animations);
  }
}

function heapSort(array, length, animations) {
  let indexOfLastParent = Math.floor(length / 2 - 1);
  let indexOfLastChild = length - 1;

  while (indexOfLastParent >= 0) {
    compareParentWithChildren(array, length, indexOfLastParent, animations);
    indexOfLastParent--;
  }
  while (indexOfLastChild >= 0) {
    /* swap root with last child because it is sorted */
    swap(array, animations, 0, indexOfLastChild);
    compareParentWithChildren(array, indexOfLastChild, 0, animations);
    indexOfLastChild--;
  }

  return array;
}
