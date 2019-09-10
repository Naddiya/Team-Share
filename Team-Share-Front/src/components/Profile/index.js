// == Import : npm
import React from 'react';
import { Item } from 'semantic-ui-react';
import { IoIosContact, IoLogoFacebook, IoLogoGithub, IoLogoTwitter, IoMdPin } from "react-icons/io";

// == Import : local
import './profile.scss';
import Projects from './projects';

// == Composant
const Profile = ({ projects }) => (
  <div className="profile">
    <div className="profile-headpic" />
    <div className="select">
        <div className="select-left">
            <div className="select-left-picture">
                <img src="src/assets/teamPic.png" alt="pic" />
            </div>
            <div className="select-left-contact">
                <IoIosContact />
                <span>adresse.mail@mail.com</span>
                <span>06 85 85 85 85</span>
            </div>
            <div className="select-left-contact">
                <span>Compétences</span>
                <span>HTML/CSS/JS</span>
                <span>REACT/REDUX</span>
                <span>GESTION DE PROJET</span>
            </div>
        </div>

        <div className="select-right">
            <div className="select-right-name">
                <h2>Prénom Nom</h2>
                <p>Intitulé du poste</p>
            </div>
            <div className="select-right-links">
                <IoMdPin /><span>Ville</span>
                <IoLogoFacebook /><span>Facebook</span>
                <IoLogoTwitter /><span>Twitter</span>
                <IoLogoGithub /><span>Github</span>
            </div>
            <div className="select-right-container">
                <h3>Description :</h3>
                <p className="select-right-description">
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
                </p>
                <h2 className="select-right-subtitle">Projets en cours :
                </h2>
                <Item.Group divided>
                    {projects.slice(0, 2).map((project) => (
                        <Projects key={project.title} {...project} />
                    ))}
                </Item.Group>
                <h2 className="select-right-subtitle">Projets réalisés :</h2>
                <Item.Group divided>
                    {projects.slice(2, 4).map((project) => (
                        <Projects key={project.title} {...project} />
                    ))}
                </Item.Group>
            </div>
        </div>
    </div>
  </div>
);

// == Export
export default Profile;