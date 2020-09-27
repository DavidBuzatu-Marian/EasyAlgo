import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setAnimationState } from '../../actions/animation';

const Controls = ({
  setAnimationState,
  animation: { animationSpeed, isAnimated },
}) => {
  const onChange = (e) => {
    setAnimationState({ animationSpeed: e.target.value });
  };

  return (
    <div>
      <div className='form-group'>
        <label htmlFor='animationSpeed'>AnimationSpeed (in ms)</label>
        <input
          className='form-control'
          type='number'
          id='animationSpeed'
          name='animationSpeed'
          value={animationSpeed}
          onChange={(e) => onChange(e)}
          disabled={isAnimated}
        />
      </div>

      <button
        onClick={(e) => setAnimationState({ start: true })}
        disabled={isAnimated}
      >
        Start sort!
      </button>
    </div>
  );
};

Controls.propTypes = {
  animation: PropTypes.object.isRequired,
  setAnimationState: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  animation: state.animation,
});

export default connect(mapStateToProps, { setAnimationState })(Controls);
