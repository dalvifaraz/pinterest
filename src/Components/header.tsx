import React, { useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import { FaUserCircle } from 'react-icons/fa';
import { GoSearch } from 'react-icons/go';
import Sidebar from './sidebar';

const Header = () => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const [search, setSearch] = useState<string>('');
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
      <div className='search-bar-container'>
        <div className='search-input-container'>
          <input
            className='search-input'
            placeholder='Search'
            value={search}
            type='text'
            onChange={(event) => setSearch(event.target.value)}
          />
          <GoSearch size={18} />
        </div>
      </div>
      <div className='user-icon-container'>
        <GoSearch size={29} color='white' className='circle-search-icon' />
        <FaUserCircle size={30} />
      </div>
    </div>
  );
};

export default Header;
