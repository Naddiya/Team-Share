// == Import : npm
import React from 'react';
import { NavLink } from 'react-router-dom';


// == Import : local
import './navbar.scss';
import LoginModal from 'src/components/Login';
import SubscribeModal from 'src/components/Subscribe';




const NavBar = ({ logged }) => {

    return(
      <div className="navbar">
        <div>
          <NavLink to="/" exact>
            <img className="navbar-logo" alt="logo" src="src/assets/logo-team-share_cut.png"/>
          </NavLink>
        </div>
        <ul className="navbar-links">
          <li>
            <NavLink to="/projects" className="navbar-link">Projets</NavLink>
          </li>
          <li>
            {logged && <NavLink to="/profile" className="navbar-link">Mon Profil</NavLink>}
          </li>
          <li>
            <LoginModal className="button-link-connect"/>
          </li>
          <li className="navbar-link">
            <SubscribeModal className="button-link button-link-subscribe"/>
          </li>
        </ul>
        
    </div>
  );
};

export default NavBar;