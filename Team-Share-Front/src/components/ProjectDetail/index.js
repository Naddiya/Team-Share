// == Import : npm
import React from 'react';

// == Import : local
import './projectdetail.scss';

// == Composant
const ProjectDetail = () => (
 <>
 <div className="project">
   <div className="project-title">
     <h1>Ton super Projet</h1>
     <p>200 x </p>
   </div>
   <div className="project-presentation" >
   <aside className="project-presentation-content">
     <div className="project-presentation-icones">
       les icones
     </div>
     <div className="project-presentation-text">
       la presentation
     </div>
     <div className="project-presentation-progress">
       la barre de progression
     </div>
   </aside>
   <aside className="project-presentation-avatar">
    <img src="https://image.freepik.com/free-photo/hand-engineer-playing-blocks-wood-tower-game-jenga-blueprint-architectural-project_1423-212.jpg" />
   </aside>
   </div>


    <section className="project-team">
        <h1 className="team-title">La team</h1>
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
      <p className="project-desciption-text">
      Quod si rectum statuerimus vel concedere amicis, quidquid velint, vel impetrare ab iis, quidquid velimus, perfecta quidem sapientia si simus, nihil habeat res vitii; sed loquimur de iis amicis qui ante oculos sunt, quos vidimus aut de quibus memoriam accepimus, quos novit vita communis. Ex hoc numero nobis exempla sumenda sunt, et eorum quidem maxime qui ad sapientiam proxime accedunt. Incenderat autem audaces usque ad insaniam homines ad haec, quae nefariis egere conatibus, Luscus quidam curator urbis subito visus: eosque ut heiulans baiolorum praecentor ad expediendum quod orsi sunt incitans vocibus crebris. qui haut longe postea ideo vivus exustus est. Fuerit toto in consulatu sine provincia, cui fuerit, antequam designatus est, decreta provincia. Sortietur an non? Nam et non sortiri absurdum est, et, quod sortitus sis, non habere. Proficiscetur paludatus? Quo? Quo pervenire ante certam diem non licebit. ianuario, Februario, provinciam non habebit; Kalendis ei denique Martiis nascetur repente provincia.
      </p>
      <div className="project-description-files">
        5 piéces jointes
      </div>
    </section>

    <section className="project-actions">
      <span className="project-join">Rejoindre le projet</span>
      <span className="project-git">curieux</span>
      <span className="project-tip">soutienir le projet</span>
    </section>

    <section className="project-comments">
      <p className="project-comments-counter">
        23 commentaires
      </p>
      <div className="project-comments-content">
      <span className="project-comments-author-avatar">image</span>
      <span className="project-comments-author-name">John-Rambo</span>
      <span className="project-comments-time">22/02/2022  22h22</span>
      <div className="project-comments-text">blablablabla trop bien , blblbllba, je veux participer ! </div>
      </div>

    </section>

    </div>
 </>
)

// == Export
export default ProjectDetail;

