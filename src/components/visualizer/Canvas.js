import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { initArr } from '../../hooks/initArr';
import { setAnimationState } from '../../actions/animation';

const SORTED_COLOR = '#F2B591';
const PRIMARY_COLOR = '#F58D79';

const Canvas = ({
  animation: { elements, isSorted, barWidth },
  setAnimationState,
}) => {
  useEffect(() => {
    let elements = initArr(100);

    setAnimationState({
      elements,
      isSorted: false,
      isAnimating: false,
      elementsSize: 100,
    });
  }, [setAnimationState]);

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
