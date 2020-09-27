import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@primer/octicons-react';
import { setAnimationState } from '../../actions/animation';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setBitsState } from '../../actions/bitsAnimation';

const DropdownBox = ({
  link,
  sortingType,
  submenu,
  setAnimationState,
  animation: { isAnimated },
}) => {
  const [dropDownState, setDropDownState] = useState({
    toggle: false,
  });

  const { toggle } = dropDownState;

  return (
    <div className='navbar-dropdown'>
      <div className='navbar-dropdown-header'>
        <Link to={link}>
          <button onClick={(e) => setDropDownState({ toggle: !toggle })}>
            {sortingType}
            {toggle ? (
              <ChevronUpIcon size={16} verticalAlign='middle' />
            ) : (
              <ChevronDownIcon size={16} verticalAlign='middle' />
            )}
          </button>{' '}
        </Link>
      </div>
      {toggle && (
        <div className='navbar-dropdown-content'>
          {submenu.map((menu, idx) => (
            <button
              disabled={isAnimated}
              key={idx}
              onClick={(e) =>
                sortingType !== 'Binary Sorts'
                  ? setAnimationState({
                      sortMethod: menu,
                      elementsSize: 0,
                      animations: [],
                      start: true,
                    })
                  : setBitsState({
                      sortMethod: menu,
                      elementsSize: 0,
                      animations: [],
                      start: true,
                    })
              }
            >
              {menu}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

DropdownBox.propTypes = {
  sortingType: PropTypes.string.isRequired,
  submenu: PropTypes.array.isRequired,
  setAnimationState: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  animation: state.animation,
});

export default connect(mapStateToProps, { setAnimationState })(DropdownBox);
