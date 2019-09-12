// == Import : npm
import React from 'react';
import { Item, Select, Input, Divider, Radio } from 'semantic-ui-react';


// == Import : local
import './projects.scss';
import ProjectList from './ProjectList';

const sortBy = [
    { key: 'date', value: 'date', text: 'Date de création' },
    { key: 'order', value: 'aorderx', text: 'Ordre alphabétique' },
    { key: 'pop', value: 'pop', text: 'Popularité' },
]

const category = [
    { key: 'all', value: 'all', text: 'Tous' },
    { key: 'ecom', value: 'ecom', text: 'E-commerce' },
    { key: 'jv', vjvue: 'al', text: 'Jeux vidéo' },
    { key: 'blog', value: 'blog', text: 'Blog' },
    { key: 'newtec', value: 'newtec', text: 'Nouvelles tech' },
    { key: 'serv', value: 'serv', text: 'Services' },
]

const technos = [
    { key: 'html', value: 'html', text: 'HTML' },
    { key: 'css', value: 'css', text: 'CSS' },
    { key: 'js', value: 'js', text: 'Javascript' },
    { key: 'php', value: 'php', text: 'PHP' },
    { key: 'git', value: 'git', text: 'Git' },
]

const skills = [
    { key: 'gesproj', value: 'gesproj', text: 'Gestion de projet' },
    { key: 'manag', value: 'manag', text: 'Management' },
    { key: 'cm', value: 'cm', text: 'Community Management' },
    { key: 'fin', value: 'fin', text: 'Finance' },
]

// == Composant
const Projects = ({ projects }) => (
    <div className="project-container">

        <div className="project-container-inputs">
        <Select placeholder='Trier par' options={sortBy} />
        <Select placeholder='Filtrer' options={category} />
        <Select placeholder='Technologies' options={technos} />
        <Select placeholder='Compétences' options={skills} />
        <Input icon='search' placeholder='Recherche...' />
        </div>
        <Divider className="project-container-divider1"/>
        <div className="radio">
        <Radio toggle />
        <label>Projets disponibles</label>
        <Radio toggle /> 
        <label>Projets suivis</label>
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
