import React from 'react';
import DropdownBox from './DropdownBox';
import Controls from './Controls';
import { sortingTypes, subMenus } from '../utils/Constants';

const Navbar = () => {
  const links = ['/', '/bits'];

  return (
    <div className='col-2 navbar navbar-expand-md fixed-left'>
      <Controls></Controls>
      {sortingTypes.map((type, idx) => (
        <DropdownBox
          key={idx}
          link={links[idx]}
          sortingType={type}
          submenu={subMenus[idx]}
        />
      ))}
    </div>
  );
};

export default Navbar;
