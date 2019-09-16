// npm import
import React from "react";
import { slide as Menu } from "react-burger-menu";
import { NavLink } from 'react-router-dom';


// local import
import './burger.scss';


const Burger = () => {

  return (
    <Menu right>
      <NavLink className="menu-item" to="/legaleMentions" exact>
          Inscription 
      </NavLink>
      <NavLink className="menu-item" to="/legaleMentions" exact>
          Connexion
      </NavLink>
      <NavLink className="menu-item" to="/" exact>
          Acceuil
      </NavLink>
      <NavLink className="menu-item" to="/projects" exact>
          Projets
      </NavLink>
      <NavLink className="menu-item" to="/project-details" exact>
          Liste des projets
      </NavLink>
      <NavLink className="menu-item" to="/project-creation" exact>
          Creer un projet
      </NavLink>
      <NavLink className="menu-item" to="/legaleMentions" exact>
          About
      </NavLink>
      <NavLink className="menu-item" to="/legalmentions" exact>
          Mentions legales
      </NavLink>
    </Menu>
  );
};


export default Burger;