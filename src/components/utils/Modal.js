import React from 'react';
import Illustration from '../../images/undraw_reading_time_gvg0.svg';
import Close from '../../images/close.svg';
import ModalTitle from './ModalTitle';
import ModalDescription from './ModalDescription';
import ModalButtons from './ModalButtons';
import ModalCode from './ModalCode';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Modal = ({
  setState,
  navbar: { activeMethod, activeDescription, activeCode, activeExtras },
}) => {
  return (
    <div className='modal'>
      <div className='modal-container'>
        <img
          className='close-img'
          src={Close}
          alt='Close'
          onClick={(e) => setState({ toggle: false })}
        />
        <ModalTitle type={activeMethod}></ModalTitle>
        <ModalDescription description={activeDescription}></ModalDescription>
        <ModalCode code={activeCode}></ModalCode>
        <div className='modal-footer'>
          <img src={Illustration} alt='Studying' />
          <ModalButtons extras={activeExtras}></ModalButtons>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  navbar: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  navbar: state.navbar,
});

export default connect(mapStateToProps)(Modal);
