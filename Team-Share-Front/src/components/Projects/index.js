// == Import : npm
import React from 'react';
import { Item, Select, Input, Divider, Radio, Dropdown, Form } from 'semantic-ui-react';
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
const Projects = ({ projects, technos, skills, tags, inputFilter, changeInput, submitFilter, submitSelection }) => {
        const handleChange = (evt) => {
            const { value } = evt.target;
            changeInput(value);
        };
        const handleSelection = (evt) => {
            const { value } = evt.target;
            submitSelection(value);
        }
 
    return(

        <div className="project-container">
            <Form>
                <Dropdown  
                    placeholder='Trier par' 
                    options={sortBy} 
                    onChange={handleSelection}
                    />
                <Dropdown  
                    placeholder='Filtrer' 
                    options={tags} 
                    onChange={handleSelection}
                    onClick={submitSelection}
                    />
                <Dropdown
                    placeholder='Technologies' 
                    options={technos}
                    onChange={handleSelection}
                    />
                <Dropdown 
                    placeholder='Compétences' 
                    options={skills}
                    onChange={handleSelection}
                    />
            </Form>

            <Divider />

                <Form onSubmit={submitFilter}>
                    <Input 
                        className="searchfluid" 
                        icon='search' 
                        placeholder='Rechercher...' 
                        value={inputFilter}
                        onChange={handleChange}
                        // onSubmit={()=>filterBy(Array.name, projects)}
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
    submitSelection: PropTypes.func.isRequired,
}

// == Export
export default Projects;
