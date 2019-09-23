// == Import : npm
import React from 'react';
import { Item, Select, Input, Divider, Radio, Dropdown, Form } from 'semantic-ui-react';
import PropTypes from 'prop-types';


// == Import : local
import './projects.scss';
import ProjectList from './ProjectList';
import { doSubmit } from '../../store/reducer';

const sortBy = [
    { key: 'date', value: 'date', text: 'Date de création' },
    { key: 'order', value: 'aorderx', text: 'Ordre alphabétique' },
    { key: 'pop', value: 'pop', text: 'Popularité' },
]


// == Composant
const Projects = ({ projects, technos, skills, tag, inputFilter, changeInput, submitSearch }) => {
        const handleChange = (evt) => {
            const { value } = evt.target;
            changeInput(value);
        };

 
    return(
    <div className="project-container">

        <Dropdown  
            placeholder='Trier par' 
            options={sortBy} 
            multiple 
            
            />
        <Dropdown  
            placeholder='Filtrer' 
            options={tag} 
            />

        <Dropdown
        // hide the labels
            renderLabel={() => false}
            placeholder='Technologies' 
            options={technos}
            
            
            />
        <Dropdown  placeholder='Compétences' options={skills} />
        <Divider />
        <Form onSubmit={submitSearch}>
        <Input 
            className="searchfluid" 
            icon='search' 
            placeholder='Rechercher...' 
            value={inputFilter}
            onChange={handleChange}
            />
        </Form>


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
                <ProjectList key={project.id} {...project} />
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
