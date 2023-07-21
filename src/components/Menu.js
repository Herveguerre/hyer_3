
import React from 'react';

const Menu = ({ isOpen }) => {
  return (
    <div className={`menu ${isOpen ? 'open' : ''}`}>
      {/* Contenu du menu */}
    </div>
  );
};

export default Menu;
