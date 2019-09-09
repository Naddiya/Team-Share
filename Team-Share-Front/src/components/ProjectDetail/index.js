// == Import : npm
import React from 'react';
import { FaHeartbeat, FaRegCheckCircle , FaGithubSquare, FaCarrot } from "react-icons/fa";

// == Import : local
import './projectdetail.scss';
import ProgressBar from "../ProgressBar/";
import Comments from "../Comments/";

// == Composant
const ProjectDetail = () => (
 <>
 <div className="project">
   <div className="project-title">
     <h1>Ton super Projet</h1>
     <p>200 x <FaHeartbeat /></p>
   </div>
   <div className="project-presentation" >

   <aside className="project-presentation-content">

     <div className="project-presentation-content-icons">
     <i className="devicon-react-original colored"></i>
     <i className="devicon-html5-plain colored"></i>
     <i className="devicon-symfony-original colored"></i>
     <i className="devicon-sass-original colored"></i>
     <i className="devicon-visualstudio-plain colored"></i>
     </div>

     <div className="project-presentation-content-text">
    Post hanc adclinis Libano monti Phoenice, regio plena gratiarum et venustatis, urbibus decorata magnis et pulchris; in quibusmoenitate celebritateque nominum Tyros excellit, Sidon et Berytus isdemque pares Emissa et Damascus saeculis condita priscis.
     </div>

     <div className="project-presentation-content-progress">
       <ProgressBar />
     </div>

   </aside>

   <aside className="project-presentation-avatar">
    <img className="project-presentation-avatar" src="https://image.freepik.com/free-photo/hand-engineer-playing-blocks-wood-tower-game-jenga-blueprint-architectural-project_1423-212.jpg" />
   </aside>

   </div>

    <section className="project-team">
        <h1>La team</h1>
        <div className="team-members">
            <div className="team-member">
                <img className="team-image" src="src/assets/teamPic.png" />
                <h3 className="team-member-name">Gerard</h3>
                <p className="team-member-role">Project Manager</p>
            </div>
            <div className="team-member">
                <img className="team-image" src="src/assets/teamPic.png" />
                <h3 className="team-member-name">Henri</h3>
                <p className="team-member-role">Product Owner</p>
            </div>
            <div className="team-member">
                <img className="team-image" src="src/assets/teamPic.png" />
                <h3 className="team-member-name">Samantha</h3>
                <p className="team-member-role">Lead Dev Back</p>
            </div>
            <div className="team-member">
                <img className="team-image" src="src/assets/teamPic.png" />
                <h3 className="team-member-name">Kelly</h3>
                <p className="team-member-role">Lead Dev Front</p>
            </div>
        </div>
    </section>

    <section className="project-description">
      <h1> Détails </h1>
      <p className="project-description-text">
      Quod si rectum statuerimus vel concedere amicis, quidquid velint, vel impetrare ab iis, quidquid velimus, perfecta quidem sapientia si simus, nihil habeat res vitii; sed loquimur de iis amicis qui ante oculos sunt, quos vidimus aut de quibus memoriam accepimus, quos novit vita communis. Ex hoc numero nobis exempla sumenda sunt, et eorum quidem maxime qui ad sapientiam proxime accedunt. Incenderat autem audaces usque ad insaniam homines ad haec, quae nefariis egere conatibus, Luscus quidam curator urbis subito visus: eosque ut heiulans baiolorum praecentor ad expediendum quod orsi sunt incitans vocibus crebris. qui haut longe postea ideo vivus exustus est. Fuerit toto in consulatu sine provincia, cui fuerit, antequam designatus est, decreta provincia. Sortietur an non? Nam et non sortiri absurdum est, et, quod sortitus sis, non habere. Proficiscetur paludatus? Quo? Quo pervenire ante certam diem non licebit. ianuario, Februario, provinciam non habebit; Kalendis ei denique Martiis nascetur repente provincia.  Quod si rectum statuerimus vel concedere amicis, quidquid velint, vel impetrare ab iis, quidquid velimus, perfecta quidem sapientia si simus, nihil habeat res vitii; sed loquimur de iis amicis qui ante oculos sunt, quos vidimus aut de quibus memoriam accepimus, quos novit vita communis. Ex hoc numero nobis exempla sumenda sunt, et eorum quidem maxime qui ad sapientiam proxime accedunt. Incenderat autem audaces usque ad insaniam homines ad haec, quae nefariis egere conatibus, Luscus quidam curator urbis subito visus: eosque ut heiulans baiolorum praecentor ad expediendum quod orsi sunt incitans vocibus crebris. qui haut longe postea ideo vivus exustus est. Fuerit toto in consulatu sine provincia, cui fuerit, antequam designatus est, decreta provincia. Sortietur an non? Nam et non sortiri absurdum est, et, quod sortitus sis, non habere. Proficiscetur paludatus? Quo? Quo pervenire ante certam diem non licebit. ianuario, Februario, provinciam non habebit; Kalendis ei denique Martiis nascetur repente provincia.
      </p>
      <div className="project-description-files">
        5 piéces jointes
      </div>
    </section>

    <section className="project-description-actions">
      <span className="project-description-actions-left">Rejoindre le projet ? <FaRegCheckCircle /></span>
      <div className="project-descritpion-actions-right">
      <span className="project-description-actions-right-git">Curieux ? <FaGithubSquare /></span>
      <span className="project-description-actions-right-tip">Soutenir le projet ? <FaCarrot /></span>
      </div>
     
    </section>

    <section className="project-comments">
      <Comments />
    </section>

    </div>
 </>
)

// == Export
export default ProjectDetail;

