// == Import : npm
import React from 'react';




// == Import : local
import './navbar.scss';

// == Composant
const Navbar = () => (
  <div className="navbar">
    <div>
      <a href="#">
        <img className="navbar-logo" alt="logo" src="src/assets/logo-team-share_cut.png"/>
      </a>
    </div>
    <ul className="navbar-links">
      <li>
        <a href="#" className="navbar-link">Projets</a>
      </li>
      <li>
        <a href="#" className="navbar-link">Mon Profil</a>
      </li>
      <li>
        <button className= "button-link">
          <a href="#" className="button-link">Se connecter</a>
        </button>
      </li>
      <li className="navbar-link">
        <button className= "button-link button-link-subscribe">
          <a className= "button-link button-link-subscribe" href="#">S'inscrire</a>
        </button>
      </li>
    </ul>
  </div>
);

// == Export
export default Navbar;
