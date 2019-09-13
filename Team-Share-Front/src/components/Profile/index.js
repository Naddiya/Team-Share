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
    <div className="profile-headpic">
    <img src="https://freerangestock.com/thumbnail/21180/a-casual-man.jpg" alt="pic" />
    </div>
    <div className="select">
        <div className="select-left">
<<<<<<< HEAD
            <div className="select-left-picture">
                <img className="modifiable" src="https://freerangestock.com/thumbnail/21180/a-casual-man.jpg" alt="pic" />
            </div>
=======
            {/* <div className="select-left-picture">
                <img src="https://freerangestock.com/thumbnail/21180/a-casual-man.jpg" alt="pic" />
            </div> */}
>>>>>>> 468957cdcb6cc82badadddb6302a8dc952130a97
            <div className="select-left-contact">
                <IoIosContact />
                <span className="modifiable">adresse.mail@mail.com</span>
                <span className="modifiable">06 85 85 85 85</span>
            </div>
            <div className="select-left-contact modifiable">
                <span>Compétences</span>
                <span>HTML/CSS/JS</span>
                <span>REACT/REDUX</span>
                <span>GESTION DE PROJET</span>
            </div>
        </div>

        <div className="select-right">
            <div className="select-right-name">
                <h2 className="modifiable sized">Prénom Nom</h2>
                <p className="modifiable sized">Intitulé du poste</p>
            </div>
            <div className="select-right-links">
                <IoMdPin /><span className="modifiable">Ville</span>
                <IoLogoFacebook /><span className="modifiable">Facebook</span>
                <IoLogoTwitter /><span className="modifiable">Twitter</span>
                <IoLogoGithub /><span className="modifiable">Github</span>
            </div>
            <div className="select-right-container">
                <h3>Description :</h3>
                <p className="select-right-description modifiable">
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
