// == Import : npm
import React from 'react';
import { Item, Select, Input, Divider, Radio, Dropdown } from 'semantic-ui-react';


// == Import : local
import './projects.scss';
import ProjectList from './ProjectList';

const sortBy = [
    { key: 'date', value: 'date', text: 'Date de création' },
    { key: 'order', value: 'aorderx', text: 'Ordre alphabétique' },
    { key: 'pop', value: 'pop', text: 'Popularité' },
]


// == Composant
const Projects = ({ projects, technos, skills, tag }) => (
    <div className="project-container">
        <Dropdown selection placeholder='Trier par' options={sortBy} />
        <Dropdown selection placeholder='Filtrer' options={tag} />
        <Dropdown selection placeholder='Technologies' options={technos} />
        <Dropdown selection placeholder='Compétences' options={skills} />
        <Divider />
        <Input className="searchfluid" icon='search' placeholder='Rechercher...' />

            <Divider className="project-container-divider1"/>
        <div className="radio">
            <div className="radio-left">
                <Radio toggle />
                <div className="radio-label">
                    Projets Suivis
                </div>
            </div>

            <div className="radio-right">
                <Radio toggle />
                <div className="radio-label">
                Projets Disponibles
                </div>
            </div>

        </div>
        <Divider className="project-container-divider2" />
        <Item.Group divided>
            {projects.map((project) => (
                <ProjectList key={project.title} {...project} />
            ))}
        </Item.Group>
        <Divider />
    </div>
        
);

// == Export
export default Projects;
