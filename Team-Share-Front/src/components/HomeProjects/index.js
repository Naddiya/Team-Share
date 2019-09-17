// == Import : npm
import React from 'react';
import { Card } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

// == Import : local
import './homeprojects.scss';
import HomeProject from './HomeProject';


// == Composant
const HomeProjects = ({ projects }) => (
  <div className="projects">
    <h2 className="projects-title">Projets mis en avant</h2>
    <div className="projects-container">
      <Card.Group>
        {projects.slice(0, 4).map((project) => (
          <HomeProject key={project.title} {...project} />
        ))}
      </Card.Group>
    </div>
    <svg className="wave-bottom" viewBox="0 0 1170 126" xmlns="http://www.w3.org/2000/svg">
      <path className="wave-path-bottom" fill="#E2E9ED" fillRule="evenodd" d="M685.6,38.8C418.7-11.1,170.2,9.9,0,30v96h1440V30C1252.7,52.2,1010,99.4,685.6,38.8z"/>

    </svg>
  </div>

);

// == Export
export default HomeProjects;

{/* <Card>
            <Image src='src/assets/teamPic.png' wrapped ui={false} />
            <Card.Content>
            <Card.Header>Projet 1</Card.Header>
            <Card.Meta>
                <span className='date'>React.js</span>
            </Card.Meta>
            <Card.Description>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
            </Card.Description>
            </Card.Content>
            <Card.Content extra>
            <a>
                <Icon name='heart' />
                48 Likes
            </a>
            </Card.Content>
        </Card>
        <Card>
            <Image src='src/assets/teamPic.png' wrapped ui={false} />
            <Card.Content>
            <Card.Header>Projet 2</Card.Header>
            <Card.Meta>
                <span className='date'>Symfony</span>
            </Card.Meta>
            <Card.Description>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </Card.Description>
            </Card.Content>
            <Card.Content extra>
            <a>
                <Icon name='heart' />
                22 Likes
            </a>
            </Card.Content>
        </Card>
        <Card>
            <Image src='src/assets/teamPic.png' wrapped ui={false} />
            <Card.Content>
            <Card.Header>Projet 3</Card.Header>
            <Card.Meta>
                <span className='date'>Angular</span>
            </Card.Meta>
            <Card.Description>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo
            </Card.Description>
            </Card.Content>
            <Card.Content extra>
            <a>
                <Icon name='heart' />
                19 Likes
            </a>
            </Card.Content>
        </Card>
        <Card>
            <Image src='src/assets/teamPic.png' wrapped ui={false} />
            <Card.Content>
            <Card.Header>Projet 4</Card.Header>
            <Card.Meta>
                <span className='date'>Lumen</span>
            </Card.Meta>
            <Card.Description>
                emo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem 
            </Card.Description>
            </Card.Content>
            <Card.Content extra>
            <a>
                <Icon name='heart' />
                11 Likes
            </a>
            </Card.Content>
        </Card> */}