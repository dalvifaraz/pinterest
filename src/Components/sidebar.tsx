import React from 'react';
import { categories } from '../Util';
import { NavLink, Link } from 'react-router-dom';

const Sidebar = () => {
  const handleCloseSidebar = () => {};
  return (
    <>
      <div className='sidebar'>
        <h2 style={{marginBottom: '8px'}}>Discover Category</h2>
        {categories.slice(0, categories.length - 1).map((category) => (
            <NavLink
            //   to={`/category/${category.name}`}
              to={`/`}
              className={({ isActive }) =>
                isActive ? 'isActiveStyle sidebar-link' : 'isNotActiveStyle sidebar-link'
              }
              onClick={handleCloseSidebar}
              key={category.name}
            >
              <img
                src={category.image}
                className="sidebar-icon"
              />
              {category.name}
            </NavLink>
          ))}
      </div>
    </>
  );
};

export default Sidebar;
