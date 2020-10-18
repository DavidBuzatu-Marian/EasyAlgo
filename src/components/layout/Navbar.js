import React from 'react';
import DropdownBox from './DropdownBox';
import Controls from './Controls';
import { sortingTypes, subMenus, subMenusMore } from '../utils/Constants';
import Title from './Title';

const Navbar = () => {
  const links = ['/', '/bits'];

  return (
    <div className='navbar'>
      <Title></Title>

      {sortingTypes.map((type, idx) => (
        <DropdownBox
          key={idx}
          link={links[idx]}
          sortingType={type}
          submenu={subMenus[idx]}
          submenuMore={subMenusMore[idx]}
        />
      ))}
      <Controls></Controls>
    </div>
  );
};

export default Navbar;
