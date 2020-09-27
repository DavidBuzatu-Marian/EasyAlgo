export const swap = (items, animations, leftIndex, rightIndex) => {
  // push the index and the height of the element we swap
  animations.push([leftIndex, items[rightIndex], 0]);
  animations.push([rightIndex, items[leftIndex], 0]);
  let temp = items[leftIndex];
  items[leftIndex] = items[rightIndex];
  items[rightIndex] = temp;
};
