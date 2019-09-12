// == Import : npm
import React from 'react';
import { Item, Select, Input, Divider, Radio, Label } from 'semantic-ui-react';


// == Import : local
import './projects.scss';
import ProjectList from './ProjectList';

const sortBy = [
    { key: 'af', value: 'af', text: 'Date de création' },
    { key: 'ax', value: 'ax', text: 'Ordre alphabétique' },
    { key: 'al', value: 'al', text: 'Popularité' },
]

const category = [
    { key: 'af', value: 'af', text: 'Tous' },
    { key: 'ax', value: 'ax', text: 'E-commerce' },
    { key: 'al', value: 'al', text: 'Jeux vidéo' },
    { key: 'al', value: 'al', text: 'Blog' },
    { key: 'al', value: 'al', text: 'Nouvelles tech' },
    { key: 'al', value: 'al', text: 'Services' },
]

const technos = [
    { key: 'af', value: 'af', text: 'HTML' },
    { key: 'ax', value: 'ax', text: 'CSS' },
    { key: 'al', value: 'al', text: 'Javascript' },
    { key: 'al', value: 'al', text: 'PHP' },
    { key: 'al', value: 'al', text: 'Git' },
]

const skills = [
    { key: 'af', value: 'af', text: 'Gestion de projet' },
    { key: 'ax', value: 'ax', text: 'Management' },
    { key: 'al', value: 'al', text: 'Community Management' },
    { key: 'al', value: 'al', text: 'Finance' },
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
            <div className="radio-left">
                <Radio toggle />
                <div className="radio-label"><h3>Projets Suivies</h3></div>
            </div>
            <div className="radio-right">
                <div><Radio toggle /></div>
                <div className="radio-label"><h3>Projets Disponibles</h3></div>
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
