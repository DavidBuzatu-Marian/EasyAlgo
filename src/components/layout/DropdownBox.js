import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@primer/octicons-react';
import { setAnimationState } from '../../actions/animation';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const DropdownBox = ({
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
        <button onClick={(e) => setDropDownState({ toggle: !toggle })}>
          {sortingType}
          {toggle ? (
            <ChevronUpIcon size={16} verticalAlign='middle' />
          ) : (
            <ChevronDownIcon size={16} verticalAlign='middle' />
          )}
        </button>{' '}
      </div>
      {toggle && (
        <div className='navbar-dropdown-content'>
          {submenu.map((menu, idx) => (
            <button
              disabled={isAnimated}
              key={idx}
              onClick={(e) =>
                setAnimationState({
                  sortMethod: menu,
                  elementsSize: 0,
                  animations: [],
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
