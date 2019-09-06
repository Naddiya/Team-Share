// == Import : npm
import React from 'react';
import { IoIosAt , IoLogoGithub , IoLogoTwitter, IoLogoFacebook, IoLogoLinkedin } from "react-icons/io";

// == Import : local
import './footer.scss';

// == Composant
const Footer = () => (
  <>
  <div id="footer" className="footer">
    <div className="footer-upper">
          <div className="footer-upper-links">
            <h3>Navigation</h3>
              <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Acceuil</a></li>
                <li><a href="#">Projets</a></li>
                <li><a href="#">S'inscire</a></li>
                <li><a href="#">Se connecter</a></li>
                <li><a href="#">Mentions Légales</a></li>
              </ul>
          </div>
      <div className="footer-upper-contacts">
          <h3> Contacts </h3>
            <div className="footer-upper-contacts">
              <a href="#"><IoIosAt /></a>
              <a href="#"><IoLogoGithub/></a>
              <a href="#"><IoLogoFacebook /></a>
              <a href="#"><IoLogoTwitter /></a>
              <a href="#"><IoLogoLinkedin /></a>
            </div>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="footer-bottom-copyright">
      &copy; 2019 Team-Share-Project.com Apothéose O'Clock
      </div>
    </div>
    
  </div>
  </>
);

// == Export
export default Footer;
