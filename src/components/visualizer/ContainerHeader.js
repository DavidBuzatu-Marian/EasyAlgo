import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Modal from '../utils/Modal';

const ContainerHeader = ({ animation: { sortMethod }, Illustration }) => {
  const [state, setState] = useState({
    toggle: false,
  });

  const { toggle } = state;

  return (
    <div>
      <h2>{sortMethod}</h2>
      <button
        className='btn btn-action'
        onClick={(e) => setState({ toggle: true })}
      >
        Learn More
      </button>
      {toggle && <Modal toggle={toggle} setState={setState} />}
      <img src={Illustration} alt='Illustration for data modeling' />
    </div>
  );
};

ContainerHeader.propTypes = {
  animation: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  animation: state.animation,
});
export default connect(mapStateToProps)(ContainerHeader);
