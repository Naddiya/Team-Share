// == Import : npm
import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

// == Import : local


// == Composant
const HomeProject = ({ image, title, tag, description, nbLike }) => (
  <Card>
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
      <a>
        <Icon name='heart' />
        {nbLike} likes
      </a>
    </Card.Content>
  </Card>
);

// == Export
export default HomeProject;

