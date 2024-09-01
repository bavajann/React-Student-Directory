import React from 'react';
import './Layout.css';

const Layout = ({ onSearch }) => {
  return (
    // <div className="content">
      <header>
        <button className="button">Add Student</button>
        <div className="ajustment input-container">
          <input
            type="text"
            placeholder="Search for student..."
            className="py-2 px-4 rounded-full border-2 border-blue-500 w-2/5 outline-none focus:ring-2 transition duration-300"
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
        <div className="logo">
          <span></span>
        </div>
      </header>
    // </div>
  );
};

export default Layout;
