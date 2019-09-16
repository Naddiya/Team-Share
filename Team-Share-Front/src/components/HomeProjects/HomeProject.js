// == Import : npm
import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom'; 
import 'semantic-ui-css/semantic.min.css';

// == Import : local
import './homeprojects.scss';


// == Composant
const HomeProject = ({ image, title, tag, description, nbLike }) => (
  <Card as={NavLink} to="/projectdetail">
    <Image src={image} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{title}</Card.Header>
      <Card.Meta>
        <span className='date'>{tag}</span>
      </Card.Meta>
      <Card.Description>
        {description}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
        <Icon name='heart' />
        {nbLike} likes
    </Card.Content>
  </Card>
);

// == Export
export default HomeProject;

