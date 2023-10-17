import React from 'react';
import { categories } from '../Util';
import { NavLink } from 'react-router-dom';
import { FaPinterest } from 'react-icons/fa';
import { RiCloseCircleLine } from 'react-icons/ri';
interface SideBarProp {
  showSidebar: boolean;
  setShowSidebar: Function;
}

const Sidebar = ({ showSidebar, setShowSidebar }: SideBarProp) => {
  const handleCloseSidebar = () => {};
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
          <h2 style={{ padding: '1rem 0.5rem', color: '#E60023', fontSize: '1.4rem' }}>
            Pinterest by Faraz
          </h2>
          <RiCloseCircleLine
            className='close-icon'
            onClick={() => setShowSidebar(false)}
            size={24}
            style={{ marginTop: '0.3rem' }}
          />
        </div>
        <div className='sidebar-container' style={{ background: '#E60023' }}>
          <h4 style={{ marginBottom: '1rem' }}>Discover Category</h4>
          <div className='sidebar-content'>
            {categories.slice(0, categories.length - 1).map((category) => (
              <NavLink
                //   to={`/category/${category.name}`}
                to={`/`}
                className={({ isActive }) =>
                  isActive
                    ? 'isActiveStyle sidebar-link'
                    : 'isNotActiveStyle sidebar-link'
                }
                onClick={handleCloseSidebar}
                key={category.name}
              >
                <img alt='sidebar-icon' src={category.image} className='sidebar-icon' />
                {category.name}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
