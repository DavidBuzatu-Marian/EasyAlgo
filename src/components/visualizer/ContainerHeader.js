import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Illustration from '../../images/undraw_visual_data_b1wx.svg';

const ContainerHeader = ({ animation: { sortMethod } }) => {
  return (
    <div>
      <h1>{sortMethod}</h1>
      <button className='btn btn-action'>Learn More</button>
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
