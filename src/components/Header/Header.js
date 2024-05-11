
import React from 'react';
import "./Header.css"
import logo from "../../img/logo_les_mellian_jeux.png"

function Header({ darkMode, toggleDarkMode }) {
  return (
    <div className='headerContainer' style={{backgroundColor: darkMode ? '#000' : '#fff', opacity: 0.9}}>
        <div>
            <a href="/">
            <img src={logo} alt="logo" width={100}/>
            </a>
            </div>
            <div>
      <button onClick={toggleDarkMode} style={{backgroundColor: darkMode ? 'yellow' : 'darkBlue', color: darkMode ? 'black ':'white'}}>
        <span className="material-symbols-outlined">
          {darkMode ? 'light_mode' : 'dark_mode'}
        </span>
      </button>
      </div>
    </div>
  );
}

export default Header;
