import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { initArr } from '../../hooks/initArr';
import { setAnimationState } from '../../actions/animation';
import { SORTED_COLOR, PRIMARY_COLOR } from '../../hooks/colors';
import { animateQuickSort } from '../../hooks/quickSort';
import { animateMergeSort } from '../../hooks/mergeSort';
import { animateBubbleSort } from '../../hooks/bubbleSort';
import { animateHeapSort } from '../../hooks/heapSort';
import { animateInsertionSort } from '../../hooks/insertionSort';
import {
  BUBBLE_SORT,
  HEAP_SORT,
  INSERTION_SORT,
  MERGE_SORT,
  QUICK_SORT,
} from '../utils/Constants';

const Canvas = ({ animation, setAnimationState }) => {
  const [canvasState, setCanvasState] = useState({
    timeoutArr: [],
  });

  const {
    elements,
    isSorted,
    barWidth,
    elementsSize,
    sortMethod,
    start,
  } = animation;
  const { timeoutArr } = canvasState;

  useEffect(() => {
    if (start && elementsSize > 0) {
      switch (sortMethod) {
        case MERGE_SORT:
          animateMergeSort(canvasState, setCanvasState, timeoutArr, animation);
          break;
        case HEAP_SORT:
          animateHeapSort(canvasState, setCanvasState, timeoutArr, animation);
          break;
        case QUICK_SORT:
          animateQuickSort(canvasState, setCanvasState, timeoutArr, animation);
          break;
        case BUBBLE_SORT:
          animateBubbleSort(canvasState, setCanvasState, timeoutArr, animation);
          break;
        case INSERTION_SORT:
          animateInsertionSort(
            canvasState,
            setCanvasState,
            timeoutArr,
            animation
          );
          break;
        default:
          animateMergeSort(canvasState, setCanvasState, timeoutArr, animation);
      }
    } else {
      clearAllTimeouts();
      let elements = initArr(60);

      setAnimationState({
        elements,
        isSorted: false,
        isAnimated: false,
        elementsSize: 60,
      });
    }
    // eslint-disable-next-line
  }, [elementsSize, start]);

  const clearAllTimeouts = () => {
    while (timeoutArr.length > 0) {
      clearTimeout(timeoutArr.pop());
    }
    setCanvasState({ timeoutArr: [] });
  };

  return elements.map((value, idx) => (
    <div
      className='elements-bar'
      key={idx}
      name={value}
      style={{
        height: `${value}px`,
        width: `${barWidth}px`,
        backgroundColor: isSorted ? SORTED_COLOR : PRIMARY_COLOR,
      }}
    ></div>
  ));
};

const mapStateToProps = (state) => ({
  animation: state.animation,
});

Canvas.propTypes = {
  animation: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, { setAnimationState })(Canvas);
