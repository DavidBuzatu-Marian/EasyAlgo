import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { initArr } from '../../hooks/initArr';
import { setAnimationState } from '../../actions/animation';
import { SORTED_COLOR, PRIMARY_COLOR } from '../../hooks/colors';
import { animateQuickSort } from '../../hooks/quickSort';
import { animateMergeSort } from '../../hooks/mergeSort';
import { animateBubbleSort } from '../../hooks/bubbleSort';

const Canvas = ({ animation, setAnimationState }) => {
  const [canvasState, setCanvasState] = useState({
    timeoutArr: [],
  });

  const { elements, isSorted, barWidth, elementsSize } = animation;
  const { timeoutArr } = canvasState;

  useEffect(() => {
    let elements = initArr(100);

    setAnimationState({
      elements,
      isSorted: false,
      isAnimating: false,
      elementsSize: 100,
    });
  }, [setAnimationState]);

  useEffect(() => {
    if (elementsSize > 0) {
      animateBubbleSort(canvasState, setCanvasState, timeoutArr, animation);
    }
    // eslint-disable-next-line
  }, [elementsSize]);

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
