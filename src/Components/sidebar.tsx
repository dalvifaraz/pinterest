import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { categories } from '../Util';
import { NavLink } from 'react-router-dom';
import { FaPinterest } from 'react-icons/fa';
import { RiCloseCircleLine } from 'react-icons/ri';
import { setPinSearch } from '../redux/action';
interface SideBarProp {
  showSidebar: boolean;
  setShowSidebar: Function;
  isModalOpen: boolean;
  setIsModalOpen: Function;
}

const Sidebar = ({ showSidebar, setShowSidebar, isModalOpen, setIsModalOpen }: SideBarProp) => {
  const [selected, setSelected] = useState<boolean>(false);
  const search = useSelector((state: any) => state.pinterest.searchValue);
  const dispatch = useDispatch();

  const handleSelected = (selectedValue : string) => {
    if(!isModalOpen){
      setSelected(true);
      dispatch(setPinSearch(selectedValue))
    }
  };

  const handleClear = () => {
    if(!isModalOpen){
      setSelected(false);
      dispatch(setPinSearch(''))
    }
  };
  return (
    <>
      <div
        style={isModalOpen ? {opacity: 0.5} : {}}
        className={showSidebar ? 'sidebar' : 'sidebar sidebar-visible'}
        onClick={()=>{setIsModalOpen(false)}}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '0 0.2rem',
            background: '#FFF',
          }}
        >
          <FaPinterest className='pinterest-icon' color='#E60023' size={30} />
          <h2
            style={{
              padding: '1rem 0.5rem',
              color: '#E60023',
              fontSize: '1.4rem',
            }}
          >
            Pin Post by Faraz
          </h2>
          <RiCloseCircleLine
            className='close-icon'
            onClick={() => !isModalOpen && setShowSidebar(false)}
            size={24}
            style={{ marginTop: '0.3rem' }}
          />
        </div>
        <div className='sidebar-container' style={{ background: '#E60023' }}>
          <div className='sidebar-title-container'>
            <h4>Discover Category</h4>
            {selected && (
              <h4 className='clear-button' onClick={() => handleClear()}>clear</h4>
            )}
          </div>
          <div className='sidebar-content'>
            {categories.slice(0, categories.length).map((category) => {
              return (
                <NavLink
                  className='sidebar-link'
                  key={category.name}
                  to={'/pinterest'}
                  onClick={() => handleSelected(category.name)}
                  style={() =>
                    search === category.name
                      ? {
                          opacity: '1',
                          borderRadius: '1rem',
                          borderWidth: '0.2rem',
                          borderColor: 'black',
                          backgroundColor: 'white',
                        }
                      : {}
                  }
                >
                  <img
                    alt='sidebar-icon'
                    src={category.image}
                    className='sidebar-icon'
                  />
                  {category.name}
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
