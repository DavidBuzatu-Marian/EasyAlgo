import React from 'react';
import DropdownBox from './DropdownBox';
import { sortingTypes, subMenus } from '../utils/Constants';

const Navbar = () => {
  return (
    <div className='navbar'>
      {sortingTypes.map((type, idx) => (
        <DropdownBox key={idx} sortingType={type} submenu={subMenus[idx]} />
      ))}
    </div>
  );
};

export default Navbar;
