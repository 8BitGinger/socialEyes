import React, { useState } from 'react';
import { MenuMenu, MenuItem, Menu, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

function MenuBar() {
  const pathname = window.location.pathname;
  const path = pathname === '/' ? '' : pathname.substr(1);
  const [activeItem, setActiveItem] = useState(path);

  const handleItemClick = (e, { name }) => setActiveItem(name);

  return (
    <Menu pointing secondary size="massive" color="violet">
      <MenuItem
        name=""
        className="homeIcon"
        active={activeItem === ''}
        onClick={handleItemClick}
        as={Link}
        to="/"
        icon="home"
      />
      <MenuMenu position="right">
        <MenuItem
          name="login"
          active={activeItem === 'login'}
          onClick={handleItemClick}
          as={Link}
          to="/login"
        />
        <MenuItem
          name="register"
          active={activeItem === 'register'}
          onClick={handleItemClick}
          as={Link}
          to="/register"
        />
        <MenuItem
          name="profile"
          active={activeItem === 'profile'}
          onClick={handleItemClick}
          as={Link}
          to="/profile"
        />
      </MenuMenu>
    </Menu>
  );
}

export default MenuBar;
