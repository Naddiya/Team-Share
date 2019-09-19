// == Import : npm
import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';


// == Import : local
import './navbar.scss';
import LoginModal from 'src/containers/Login';
import SubscribeModal from 'src/containers/Subscribe';



const NavBar = ({ token }) => {

    return(
      <div className="navbar">
        <div>
          <NavLink to="/" exact>
            <img className="navbar-logo" alt="logo" src="http://92.243.10.99/pics/logo.png"/>
          </NavLink>
        </div>
        <ul className="navbar-links">
          <li>
            <NavLink to="/projects" className="navbar-link">Projets</NavLink>
          </li>
          <li>
            {token.length > 3 && <NavLink to="/profile" className="navbar-link">Mon Profil</NavLink>}
          </li>
          <li>
          {token === "" &&  <LoginModal className="button-link-connect"/>}
          </li>
          <li className="navbar-link">
          {token === "" && <SubscribeModal className="button-link button-link-subscribe"/>}
          </li>
          <li className="navbar-link">
          {token.length > 3 && <NavLink to="/disconnect" className="button-link button-link-connect">Se Déconnecter</NavLink>}
          </li>
        </ul>
        
    </div>
  );
};

NavBar.propTypes = {
  token: PropTypes.string.isRequired,
}

export default NavBar;