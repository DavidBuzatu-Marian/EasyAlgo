export const MERGE_SORT = 'Merge Sort';
export const QUICK_SORT = 'Quick Sort';
export const HEAP_SORT = 'Heap Sort';
export const BUBBLE_SORT = 'Bubble Sort';
export const INSERTION_SORT = 'Insertion Sort';
export const RADIX_SORT = 'Radix Sort';
export const RADIX_STRAIGHT = 'Radix Straight Sort';
export const NUMBER_TYPE = 'Number Type';
export const BINARY_TYPE = 'Binary Type';

// Merge sort
export const MERGE_SORT_DESCRIPTION =
  'Merge Sort is a general purpose sorting algorithm that is implemented using the Divide and Conquer approach. This means that merge sort works by solving part of sorting, and then merging together the results to form the final, sorted array.';
export const merge_sort_extras = [
  'https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/overview-of-merge-sort',
  'https://en.wikipedia.org/wiki/Merge_sort',
  'https://www.youtube.com/watch?v=mB5HXBb_HY8',
];
export const MERGE_SORT_CODE =
  'https://gist.github.com/DavidBuzatu-Marian/088caac15a78ef63f4b783fe4259a437#merge-sort.js';

// Heap sort
export const HEAP_SORT_DESCRIPTION =
  'Heap Sort is a comparison based sorting algorithm. It works by creating a heap, and then constantly removing the biggest element (see MaxHeap). After removing the biggest element, the heap is reordered to get the maximum at the top. It can be seen as an improved insertion sort.';
export const heap_sort_extras = [
  'https://en.wikipedia.org/wiki/Heapsort',
  'https://www.youtube.com/watch?v=HqPJF2L5h9U',
  'https://www.youtube.com/watch?v=2DmK_H7IdTo',
  'https://www.hackerearth.com/practice/algorithms/sorting/heap-sort/tutorial/',
];

export const HEAP_SORT_CODE =
  'https://gist.github.com/DavidBuzatu-Marian/cfba9e74a5e6111ee1177a034ef79ef5';

// Quick sort
export const QUICK_SORT_DESCRIPTION =
  "Quick Sort is considered to be the 'go to' when it comes to sorting algorithms. It is an easy algorithm (very similar to merge sort) that sorts in place. It works by searching for a pivot and comparing all the elements in its left with the ones in its right, switching them when the ordering is not met.";

export const quick_sort_extras = [
  'https://en.wikipedia.org/wiki/Quicksort',
  'https://www.youtube.com/watch?v=7h1s2SojIRw',
  'https://www.khanacademy.org/computing/computer-science/algorithms/quick-sort/a/overview-of-quicksort',
  'https://www.khanacademy.org/computing/computer-science/algorithms/quick-sort/a/analysis-of-quicksort',
];

export const QUICK_SORT_CODE =
  'https://gist.github.com/DavidBuzatu-Marian/f0f50f75da06bdc26cd471e6fbea6104';

// Insertion sort
export const INSERTION_SORT_DESCRIPTION =
  'Insertion Sort works by sorting the array step by step. It will first sort the array with 1 element, then with 2, and so on. After an iteration, we have a subarray from 1 to that step that is sorted. This approach is much more slower than the rest, but it has its applications (e.g. sorting very small lists)';
export const insertion_sort_extras = [
  'https://www.quora.com/What-are-practical-applications-of-insertion-sort',
  'https://www.geeksforgeeks.org/insertion-sort/',
  'https://en.wikipedia.org/wiki/Insertion_sort#:~:text=Insertion%20sort%20is%20a%20simple,%2C%20heapsort%2C%20or%20merge%20sort.',
];
export const INSERTION_SORT_CODE =
  'https://gist.github.com/DavidBuzatu-Marian/0664bd3841b1d7567ed64be0dfdd762d';

// Bubble sort
export const BUBBLE_SORT_DESCRIPTION =
  "Bubble Sort is probably the first sorting algorithm taught, considering its simplicity. At the end of an iteration, the biggest element will be positioned at the end of the current subarray. This means that the biggest numbers 'bubble up' to the end, just like bubbles in water";
export const bubble_sort_extras = [
  'https://brilliant.org/wiki/bubble-sort/',
  'https://en.wikipedia.org/wiki/Bubble_sort',
  'https://medium.com/madhash/bubble-sort-in-a-nutshell-how-when-where-4965e77910d8',
];
export const BUBBLE_SORT_CODE =
  'https://gist.github.com/DavidBuzatu-Marian/fdfc0fdbba5a6e1b74ca0fd3baf8fc70';

// Radix straight sort
export const RADIX_STRAIGHT_DESCRIPTION =
  'Radix Straight Sort is an integer sorting algorithm. It works by taking groups of subparts of the integer and grouping the numbers after them. In the binary version I implemented, it takes 2 pairs of bits (starting from the least significant ones) and groups the integers by them, resulting in a sorted array when put back';
export const radix_straight_extras = [
  'https://en.wikipedia.org/wiki/Radix_sort',
  'https://www.digitalocean.com/community/tutorials/js-radix-sort',
  'https://www.youtube.com/watch?v=xhr26ia4k38',
  'https://brilliant.org/wiki/radix-sort/',
];
export const RADIX_STRAIGHT_CODE =
  'https://gist.github.com/DavidBuzatu-Marian/aeb70c710e6a52ed1ac62e0b3b5e05ee';

export const sortingTypes = [NUMBER_TYPE, BINARY_TYPE];
export const subMenus = {
  0: [MERGE_SORT, HEAP_SORT, QUICK_SORT, BUBBLE_SORT, INSERTION_SORT],
  1: [RADIX_STRAIGHT],
};

export const subMenusMore = {
  0: [
    {
      activeDescription: MERGE_SORT_DESCRIPTION,
      activeExtras: merge_sort_extras,
      activeCode: MERGE_SORT_CODE,
    },
    {
      activeDescription: HEAP_SORT_DESCRIPTION,
      activeExtras: heap_sort_extras,
      activeCode: HEAP_SORT_CODE,
    },
    {
      activeDescription: QUICK_SORT_DESCRIPTION,
      activeExtras: quick_sort_extras,
      activeCode: QUICK_SORT_CODE,
    },
    {
      activeDescription: BUBBLE_SORT_DESCRIPTION,
      activeExtras: bubble_sort_extras,
      activeCode: BUBBLE_SORT_CODE,
    },
    {
      activeDescription: INSERTION_SORT_DESCRIPTION,
      activeExtras: insertion_sort_extras,
      activeCode: INSERTION_SORT_CODE,
    },
  ],
  1: [
    {
      activeDescription: RADIX_STRAIGHT_CODE,
      activeExtras: radix_straight_extras,
      activeCode: RADIX_STRAIGHT_CODE,
    },
  ],
};
