import React, { useContext, useState } from 'react';
import { MenuMenu, MenuItem, Menu, Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../context/auth';

function MenuBar() {
  const { user, logout } = useContext(AuthContext);
  const pathname = window.location.pathname;
  const path = pathname === '/' ? '' : pathname.substr(1);
  const [activeItem, setActiveItem] = useState(path);

  const handleItemClick = (e, { name }) => setActiveItem(name);

  const menuBar = user ? (
    <Menu pointing secondary size="massive" color="purple">
      <MenuItem
        name={user.username}
        onClick={handleItemClick}
        active
        className="usernameIcon"
        as={Link}
        to="/"
      />
      <MenuMenu position="right">
        <MenuItem
          name="logout"
          active={activeItem === 'logout'}
          onClick={logout}
          as={Link}
          to="/"
        />

        <MenuItem
          name="_"
          active={activeItem == '_'}
          onClick={handleItemClick}
          as={Link}
          to="/profile"
          icon="user"
          className="profileIcon"
        />
      </MenuMenu>
    </Menu>
  ) : (
    <Menu pointing secondary size="massive" color="purple">
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
          name="*"
          active={activeItem == '*'}
          onClick={handleItemClick}
          as={Link}
          to="/about"
          icon="info circle"
          className="profileIcon"
        />
      </MenuMenu>
    </Menu>
  );

  return menuBar;
}

export default MenuBar;
