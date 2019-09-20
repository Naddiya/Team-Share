// == Import : npm
import React, { useEffect } from 'react';
import { Item, Message,  Button, Header, Icon, Modal, Form, Dropdown , Divider } from 'semantic-ui-react';
import { IoIosContact, IoLogoFacebook, IoLogoGithub, IoLogoTwitter, IoMdPin } from "react-icons/io";
import axios from 'axios';

// == Import : local
import './profile.scss';
import Projects from './projects';
import UpdateModal from 'src/containers/UpdateModal';
import ParticipationMessage from 'src/components/Messages/ParticipationMessage';
import store from 'src/store';


// == Composant
const Profile = (
    { 
        projects,
        technos,
        skills,
        firstname,
        lastname,
        description,
        city,
        jobTitle,
        mail,
        phone, 
        photo,
        urlFacebook,
        urlTwitter,
        urlGithub,
    }) => {
    
    

    return (
  <div className="profile">
    <div className="profile-headpic">
    </div>
    <div className="select">
        <div className="select-left">
            <div className="select-left-picture">
                <img src={photo} alt="pic" />
            </div>

            <div className="select-left-contact">
                <IoIosContact />
                <span>{mail}</span>
                <span>{phone}</span>
            </div>
            <div className="select-left-contact">
                <span>Compétences</span>    
                <span>HTML/CSS/JS</span>
                <span>REACT/REDUX</span>
                <span>GESTION DE PROJET</span>
            </div>
                <UpdateModal technos={technos} skillsList={skills} />
        </div>

        <div className="select-right">
            <div className="select-right-name">
                <h2 className="sized">{firstname} {lastname}</h2>
                <p className="sized">{jobTitle}</p>
            </div>
            <div className="select-right-links">
                <IoMdPin /><span>{city}</span>
                <IoLogoFacebook /><span>{urlFacebook}</span>
                <IoLogoTwitter /><span>{urlTwitter}</span>
                <IoLogoGithub /><span>{urlGithub}</span>
            </div>
            <div className="select-right-container">
                <h3>Profil :</h3>
                <p className="select-right-description">
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
                </p>
                <h2 className="select-right-subtitle">Projets en cours :
                </h2>
                <Item.Group divided>
                    <ParticipationMessage />
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
};

// == Export
export default Profile;


