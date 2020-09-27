import React from 'react';
import DropdownBox from './DropdownBox';
import Controls from './Controls';
import { sortingTypes, subMenus } from '../utils/Constants';

const Navbar = () => {
  return (
    <div className='navbar'>
      <Controls></Controls>
      {sortingTypes.map((type, idx) => (
        <DropdownBox key={idx} sortingType={type} submenu={subMenus[idx]} />
      ))}
    </div>
  );
};

export default Navbar;
