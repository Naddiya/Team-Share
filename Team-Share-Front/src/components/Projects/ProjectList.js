// == Import : npm
import React from 'react';
import { Button, Icon, Image, Item, Label } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

// == Import : local


// == Composant
const ProjectList = ({ image, title, tag, description, nbLike }) => (
<Item>
      <Item.Image src={image} />

      <Item.Content>
        <Item.Header as='a'>{title}</Item.Header>
        <Item.Description>{description}</Item.Description>
        <Item.Extra>
          <Label>{tag}</Label>
          <a>
            <Icon name='heart' />
            {nbLike} likes
        </a>
        </Item.Extra>
      </Item.Content>
    </Item>
);

// == Export
export default ProjectList;


// <Card fluid>
// <Image src={image} wrapped ui={false} />
// <Card.Content>
//   <Card.Header>{title}</Card.Header>
//   <Card.Meta>
//     <span className='date'>{tag}</span>
//   </Card.Meta>
//   <Card.Description>
//     {description}
//   </Card.Description>
// </Card.Content>
// <Card.Content extra>
//   <a>
//     <Icon name='heart' />
//     {nbLike} likes
//   </a>
// </Card.Content>
// </Card>