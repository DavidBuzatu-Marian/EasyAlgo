import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@primer/octicons-react';
import { setAnimationState } from '../../actions/animation';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setBitsState } from '../../actions/bitsAnimation';
import { BINARY_TYPE, NUMBER_TYPE } from '../utils/Constants';
import IconNum from '../../images/NumbersMenu.svg';
import IconBin from '../../images/BinaryMenu.svg';
const DropdownBox = ({
  link,
  sortingType,
  submenu,
  setAnimationState,
  animation: { isAnimated },
  setBitsState,
  bitsAnimation,
}) => {
  const [dropDownState, setDropDownState] = useState({
    toggle: false,
  });

  const { toggle } = dropDownState;
  return (
    <div className='navbar-dropdown'>
      <div className='navbar-dropdown-header'>
        <Link to={link}>
          <button
            className={toggle ? 'active' : ''}
            onClick={(e) => setDropDownState({ toggle: !toggle })}
          >
            <img
              src={sortingType === NUMBER_TYPE ? IconNum : IconBin}
              alt='Numbers Menu'
            />
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
              disabled={isAnimated || bitsAnimation.isAnimated}
              key={idx}
              onClick={(e) =>
                sortingType !== BINARY_TYPE
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
  setBitsState: PropTypes.func.isRequired,
  animation: PropTypes.object.isRequired,
  bitsAnimation: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  animation: state.animation,
  bitsAnimation: state.bitsAnimation,
});

export default connect(mapStateToProps, { setAnimationState, setBitsState })(
  DropdownBox
);
