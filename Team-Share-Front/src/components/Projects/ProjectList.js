// == Import : npm
import React from 'react';
import { Button, Icon, Image, Item, Label } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import { IoIosAddCircle, IoIosBatteryCharging } from "react-icons/io";
import { NavLink } from 'react-router-dom'; 
import Projects from '.';


// == Import : local




// == Composant
const ProjectList = ({
  image, 
  title, 
  tag, 
  description, 
  nbLike, 
  skills }) => (
<Item>
      <Item.Image src={image} />

      <Item.Content>
        <Item.Header as={NavLink} to="/project-detail">{title}
        </Item.Header>
          <span className="item-follow"><IoIosAddCircle size="28px" />Follow</span>
        <Item.Extra>
          <Label>{tag}</Label>
          <Label>le 20/12/2015</Label>
          <a>
            <Icon name='heart' />
            {nbLike} likes
        </a>
        <span className="item-follow"><IoIosBatteryCharging size="28px" />Progression</span>
        </Item.Extra>
        <Item.Description>{description}</Item.Description>
        <Item.Extra>
          <span>Catégories : </span>
          {skills.map((skill) => (
          <Label key={skill.id} {...skill}>{skill.name}</Label>
          ))}
          <Label> </Label>
          <span>Compétences : </span>
          <Label>{}</Label>
        </Item.Extra>
      </Item.Content>
    </Item>
);


{/* <Item.Group divided>
            {projects.map((project) => (
                <ProjectList key={project.id} {...project} />
            ))}
        </Item.Group> */}

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