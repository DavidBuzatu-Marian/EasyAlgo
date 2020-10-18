import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setAnimationState } from '../../actions/animation';
import { setBitsState } from '../../actions/bitsAnimation';
import { NUMBER_TYPE } from '../utils/Constants';

const Controls = ({
  setAnimationState,
  navbar,
  setBitsState,
  bitsAnimation,
  animation: { animationSpeed, isAnimated },
}) => {
  const onChange = (e) => {
    if (navbar.activeCategory === NUMBER_TYPE) {
      setAnimationState({ animationSpeed: e.target.value });
    } else {
      setBitsState({ animationSpeed: e.target.value });
    }
  };

  return (
    <div className='mt-3'>
      <div className='form-group'>
        <label htmlFor='animationSpeed'>AnimationSpeed (in ms)</label>
        <input
          className='form-control'
          type='number'
          id='animationSpeed'
          name='animationSpeed'
          value={
            navbar.activeCategory === NUMBER_TYPE
              ? animationSpeed
              : bitsAnimation.animationSpeed
          }
          onChange={(e) => onChange(e)}
          disabled={
            navbar.activeCategory === NUMBER_TYPE
              ? isAnimated
              : bitsAnimation.isAnimated
          }
        />

        <button
          className='mt-3'
          onClick={(e) =>
            navbar.activeCategory === NUMBER_TYPE
              ? setAnimationState({
                  start: true,
                  elementsSize: 0,
                  animations: [],
                })
              : setBitsState({ start: true, elementsSize: 0, animations: [] })
          }
          disabled={
            navbar.activeCategory === NUMBER_TYPE
              ? isAnimated
              : bitsAnimation.isAnimated
          }
        >
          Start sort
        </button>
      </div>
    </div>
  );
};

Controls.propTypes = {
  animation: PropTypes.object.isRequired,
  setAnimationState: PropTypes.func.isRequired,
  setBitsState: PropTypes.func.isRequired,
  navbar: PropTypes.object.isRequired,
  bitsAnimation: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  animation: state.animation,
  navbar: state.navbar,
  bitsAnimation: state.bitsAnimation,
});

export default connect(mapStateToProps, { setBitsState, setAnimationState })(
  Controls
);
