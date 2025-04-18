import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">.monks</div>
      <nav>
        <ul>
          <li>Categoria 1</li>
          <li>Categoria 2</li>
          <li>Categoria 3</li>
          <li>Categoria 4</li>
        </ul>
      </nav>
      <div className="banner-text">
        <h1>Lorem ipsum dolor sit amet consectetur</h1>
        <p>Semper orci adipiscing faucibus sit scelerisque quis commodo venenatis viverra</p>
      </div>
    </header>
  );
};

export default Header;
