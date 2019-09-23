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
const Projects = ({
    projects, 
    technos, 
    skills, 
    tags, 
    inputFilter, //valeur de l'input
    changeInput , //changement de la valeur de l'input
    changeFilter, //changement de la selection dropdown
    submitFilter, //envois de la selection
    currentSelection, //valeur de la selection
    submitSelection , //soumission de la seletion en dropdown

}) => {
        const handleChange = (evt) => {
            const { value } = evt.target;
            changeInput(value);
        };
        const handleSelection = (evt) => {
            const { currentSelection } = evt.target;
            changeFilter(currentSelection);
        };

    return(

        <div className="project-container">
            <Form>
                <Dropdown  
                    placeholder='Trier par' 
                    options={sortBy}
                    value={currentSelection}
                    onChange={handleSelection, submitSelection}
                    />
                <Dropdown  
                    placeholder='Filtrer' 
                    options={tags}
                    value={currentSelection}
                    onChange={handleSelection, submitSelection}
                    />
                <Dropdown
                    placeholder='Technologies' 
                    options={technos}
                    value={currentSelection}
                    onChange={handleSelection, submitSelection}
                    />
                <Dropdown 
                    placeholder='Compétences' 
                    options={skills}
                    value={currentSelection}
                    onChange={handleSelection, submitSelection}
                    />
            </Form>

            <Divider />

                <Form onSubmit={() => submitFilter(inputFilter)}>
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
    submitSelection: PropTypes.func.isRequired,
    // selectedFilter: PropTypes.string.isRequired,
}

// == Export
export default Projects;
