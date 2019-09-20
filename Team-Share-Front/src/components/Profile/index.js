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
        skills
    }) => {
    
    const state = store.getState();
    

    return (
  <div className="profile">
    <div className="profile-headpic">
    </div>
    <div className="select">
        <div className="select-left">
            <div className="select-left-picture">
                <img src={state.photo} alt="pic" />
            </div>

            <div className="select-left-contact">
                <IoIosContact />
                <span>{state.email}</span>
                <span>{state.phoneNumber}</span>
            </div>
            <div className="select-left-contact">
                <span>Compétences :</span>    
                <span>{state.technos[0].name}</span>
                <span>{state.skills[0].name}</span>
            </div>
                <UpdateModal technos={technos} skillsList={skills} />
        </div>

        <div className="select-right">
            <div className="select-right-name">
                <h2 className="sized">{state.firstName} {state.lastName}</h2>
                <p className="sized">{state.jobtitle}</p>
            </div>
            <div className="select-right-links">
                <IoMdPin /><span>{state.city}</span>
                <IoLogoFacebook /><span>{state.urlFacebook}</span>
                <IoLogoTwitter /><span>{state.urlTwitter}</span>
                <IoLogoGithub /><span>{state.urlGithub}</span>
            </div>
            <div className="select-right-container">
                <h3>Profil :</h3>
                <p className="select-right-description">
                {state.description}
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


