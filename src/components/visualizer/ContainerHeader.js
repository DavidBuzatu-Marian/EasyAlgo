import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const ContainerHeader = ({ animation: { sortMethod }, Illustration }) => {
  return (
    <div>
      <h2>{sortMethod}</h2>
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
