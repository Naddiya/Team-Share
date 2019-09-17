// == Import : npm
import React from 'react';
import { FaHeartbeat, FaRegCheckCircle , FaGithubSquare, FaCarrot } from "react-icons/fa";

// == Import : local
import './projectdetail.scss';
import ProgressBar from "./ProgressBar/";
import Comments from "./Comments/";

// == Composant
const ProjectDetail = ({
    title,
    nbLike,
    technos,
    shortDescription,
    image,
    collaborators,
    description,
  }) => {
    
    const react = <i className="devicon-react-original colored"></i>;
    const html = <i className="devicon-html5-plain colored"></i>
    const symfony = <i className="devicon-symfony-original colored"></i>
    const sass = <i className="devicon-sass-original colored"></i>
    const visualstudio = <i className="devicon-visualstudio-plain colored"></i>
    
    return (
  <div className="project">
    <div className="project-title">
      <h1>{title}</h1>
      <div className="project-title-likeCount">{nbLike} <FaHeartbeat /> &nbsp; </div>
    </div>
    <div className="project-presentation" >

    <aside className="project-presentation-content">

      <div className="project-presentation-content-icons">
      {react}
      {html}
      {symfony}
      {sass}
      {visualstudio}
      </div>

      <div className="project-presentation-content-text">
      {shortDescription}
      </div>

      <div className="project-presentation-content-progress">
        <ProgressBar />
      </div>

    </aside>

    <aside className="project-presentation-avatar">
      <img className="project-presentation-avatar" src={image} />
    </aside>

    </div>

      <section className="project-team">
          <h1>La team</h1>
          <div className="team-members">
              <div className="team-member">
                  <img className="team-image" src="http://92.243.10.99/pics//teamPic.png" />
                  <h3 className="team-member-name">{collaborators[0].name}</h3>
                  <p className="team-member-role">{collaborators[0].job}</p>
              </div>
              <div className="team-member">
                  <img className="team-image" src="src/assets/teamPic.png" />
                  <h3 className="team-member-name">Henri</h3>
                  <p className="team-member-role">Product Owner</p>
              </div>
              <div className="team-member">
                  <img className="team-image" src="src/assets/teamPic.png" />
                  <h3 className="team-member-name">Samantha</h3>
                  <p className="team-member-role">Lead Back</p>
              </div>
              <div className="team-member">
                  <img className="team-image" src="src/assets/teamPic.png" />
                  <h3 className="team-member-name">Kelly</h3>
                  <p className="team-member-role">Lead Front</p>
              </div>
          </div>
      </section>

      <section className="project-description">
        <h1> Détails </h1>
        <p className="project-description-text">
        {description}
        </p>
        <div className="project-description-files">
          5 piéces jointes
        </div>
      </section>

      <section className="project-description-actions">
            <div className="project-description-actions-left">
              <a href="#">Rejoindre le projet ? <FaRegCheckCircle /></a>
            </div>
            <div className="project-description-actions-right-git">
              <a href="https://github.com/">Curieux ? <FaGithubSquare /></a>
              </div>
            <div className="project-description-actions-right-tip">
            <a href="https://fr.tipeee.com/" target="blank">Soutenir le projet ? <FaCarrot /></a>
              </div>
      </section>

      <section className="project-comments">
        <Comments />
      </section>

      </div>
  );
};

// == Export
export default ProjectDetail;

