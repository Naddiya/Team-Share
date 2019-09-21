// == Import : npm
import React from 'react';
import { Item, Select, Input, Divider, Radio, Dropdown } from 'semantic-ui-react';
import PropTypes from 'prop-types';


// == Import : local
import './projects.scss';
import ProjectList from './ProjectList';

const sortBy = [
    { key: 'date', value: 'date', text: 'Date de création' },
    { key: 'order', value: 'aorderx', text: 'Ordre alphabétique' },
    { key: 'pop', value: 'pop', text: 'Popularité' },
]


// == Composant
const Projects = ({ projects, technos, skills, tag, inputFilter, changeInput }) => {
        const handleChange = (evt) => {
            const { value } = evt.target;
            changeInput(value);
        };
    return(
    <div className="project-container">
        <Dropdown  placeholder='Trier par' options={sortBy} />
        <Dropdown  placeholder='Filtrer' options={tag} />
        <Dropdown  placeholder='Technologies' options={technos} />
        <Dropdown  placeholder='Compétences' options={skills} />
        <Divider />
        <Input 
            className="searchfluid" 
            icon='search' 
            placeholder='Rechercher...' 
            value={inputFilter}
            onChange={handleChange}
            />

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
};

Projects.propTypes = {
    inputFilter: PropTypes.string.isRequired,
    changeInput: PropTypes.func.isRequired,
}

// == Export
export default Projects;
