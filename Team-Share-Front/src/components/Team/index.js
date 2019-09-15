// == Import : npm
import React from 'react';

// == Import : local
import './team.scss';

// == Composant
const Team = () => (
    <>
    <div className="team">
        <h1 className="team-title">Notre fabuleuse équipe</h1>
        <div className="team-members">
            <div className="team-member">
                <img className="team-image" src="src/assets/nadiapic.jpg" />
                <h3 className="team-member-name">Nadia</h3>
                <p className="team-member-role">Project Manager</p>
            </div>
            <div className="team-member">
                <img className="team-image" src="src/assets/teamPic.png" />
                <h3 className="team-member-name">Julien</h3>
                <p className="team-member-role">Product Owner</p>
            </div>
            <div className="team-member">
                <img className="team-image" src="src/assets/teamPic.png" />
                <h3 className="team-member-name">Alexandre</h3>
                <p className="team-member-role">Lead Dev Back</p>
            </div>
            <div className="team-member">
                <img className="team-image" src="src/assets/teamPic.png" />
                <h3 className="team-member-name">Alexis</h3>
                <p className="team-member-role">Lead Dev Front</p>
            </div>
        </div>
    </div>
    </>
);

// == Export
export default Team;

