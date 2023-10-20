import React, { useState } from 'react';
import { categories } from '../Util';
import { NavLink } from 'react-router-dom';
import { FaPinterest } from 'react-icons/fa';
import { RiCloseCircleLine } from 'react-icons/ri';
interface SideBarProp {
  showSidebar: boolean;
  setShowSidebar: Function;
}

const Sidebar = ({ showSidebar, setShowSidebar }: SideBarProp) => {
  const [selected, setSelected] = useState('');
  return (
    <>
      <div
        style={{
          borderRight: '0.2rem solid #E60023',
          borderTop: '0.2rem solid #E60023',
        }}
        className={showSidebar ? 'sidebar' : 'sidebar sidebar-visible'}
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
            onClick={() => setShowSidebar(false)}
            size={24}
            style={{ marginTop: '0.3rem' }}
          />
        </div>
        <div className='sidebar-container' style={{ background: '#E60023' }}>
          <div className='sidebar-title-container'>
            <h4>Discover Category</h4>
            {selected.length > 0 && (
              <h4 onClick={() => setSelected('')}>clear</h4>
            )}
          </div>
          <div className='sidebar-content'>
            {categories.slice(0, categories.length).map((category) => {
              return (
                <NavLink
                  className='sidebar-link'
                  key={category.name}
                  to={'/pinterest'}
                  onClick={() => setSelected(category.name)}
                  style={() =>
                    selected === category.name
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
