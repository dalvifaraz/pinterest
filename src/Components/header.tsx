import React, { useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import { FaUserCircle } from 'react-icons/fa';
import Sidebar from './sidebar';

const Header = () => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  return (
    <div className='header'>
      <div className='left-icon-container'>
        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        <HiMenu
          onClick={() => setShowSidebar(true)}
          className={showSidebar ? 'hamburger-icon' : ''}
          size={30}
        />
      </div>
      <div>
        <h2>Search Bar</h2>
      </div>
      <div className='user-icon-container'>
        <FaUserCircle size={30} />
      </div>
    </div>
  );
};

export default Header;
