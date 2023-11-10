import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { HiMenu } from 'react-icons/hi';
import { FaUserCircle } from 'react-icons/fa';
import { GoSearch } from 'react-icons/go';
import { RiAddCircleFill } from 'react-icons/ri';
import Sidebar from './sidebar';
import { setPinSearch } from '../redux/action';
import { Outlet } from 'react-router-dom';
import PinModal from './pinmodal';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const search = useSelector((state: any) => state.pinterest.searchValue);
  const dispatch = useDispatch();

  function openModal() {
    setIsModalOpen(true);
  }

  return (
    <>
      <div className='header'>
        <div className='left-icon-container'>
          <Sidebar
            setIsModalOpen={setIsModalOpen}
            isModalOpen={isModalOpen}
            showSidebar={showSidebar}
            setShowSidebar={setShowSidebar}
          />
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
              onChange={(event) => dispatch(setPinSearch(event.target.value))}
            />
            <GoSearch size={18} />
          </div>
        </div>
        <div className='user-icon-container'>
          <GoSearch size={24} color='white' className='circle-search-icon' />
          <RiAddCircleFill onClick={openModal} size={34} />
          <FaUserCircle className='user-icon' size={30} />
        </div>
      </div>
      <PinModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <Outlet />
    </>
  );
};

export default Header;
