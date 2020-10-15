import React from 'react';
import { Illustration } from '../../images/undraw_reading_time_gvg0.svg';
import ModalTitle from './ModalTitle';
import ModalDescription from './ModalDescription';
import ModalButtons from './ModalButtons';
import PropTypes from 'prop-types';
import { connect } from 'redux';

const Modal = ({ animation, bitsAnimation }) => {
  return (
    <div className='modal-container'>
      <ModalTitle type={sortMethod}></ModalTitle>
      <ModalDescription description={description}></ModalDescription>
      <ModalCode code={code}></ModalCode>
      <img src={Illustration} alt='Studying' />
      <ModalButtons externals={externals}></ModalButtons>
    </div>
  );
};

Modal.propTypes = {
  animation: PropTypes.object.isRequired,
  bitsAnimation: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  animation: state.animation,
  bitsAnimation: state.bitsAnimation,
});

export default connect(mapStateToProps)(Modal);
