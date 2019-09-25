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
    inputFilter, 
    changeInputTechnos,
    changeInputSkills,
    changeInputTags,
    changeInputSortBy,
    changeInput,
    submitInputFilter,
}) => {
        const handleChangeTechnos = (evt, options) => {
            const { value } = options;
            changeInputTechnos(value);
        };
        const handleChangeSkills = (evt, options) => {
            const { value } = options;
            changeInputSkills(value);
        };
        const handleChangeTags = (evt, options) => {
            const { value, id } = options;
            changeInputTags(value, id);
        };
        const handleChangeSortBy = (evt, options) => {
            const { value } = options;
            changeInputSortBy(value);
        };
        const handleChangeInputSearch = (evt) => {
            const { value } = evt.target;
            changeInput(value);
        };

    return(

        <div className="project-container">
            <Form>
                <Dropdown  
                    selection
                    placeholder='Trier par' 
                    options={sortBy}
                    onChange={handleChangeSortBy}
                    
                    />
                <Dropdown  
                    selection
                    placeholder='Filtrer' 
                    options={tags.map(tag => ({
                        value:tag.id,
                        text:tag.name,
                    }))}
                    onChange={handleChangeTags}
                    />
                <Dropdown
                    selection
                    placeholder='Technologies'
                    options={technos.map(techno => ({
                        value:techno.id,
                        text:techno.name,
                    }))}
                    onChange={handleChangeTechnos}
                    />
                <Dropdown 
                    selection
                    placeholder='Compétences' 
                    options={skills.map(skill => ({
                        value:skill.id,
                        text:skill.name,
                    }))}
                    onChange={handleChangeSkills}
                    />
            </Form>

            <Divider />

                <Form onSubmit={() => submitInputFilter(inputFilter)}>
                    <Input 
                        className="searchfluid" 
                        icon='search' 
                        placeholder='Rechercher...' 
                        value={inputFilter}
                        onChange={handleChangeInputSearch}
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
    changeInputTechnos: PropTypes.func.isRequired,
    changeInputSkills: PropTypes.func.isRequired,
    changeInputTags: PropTypes.func.isRequired,
    changeInputSortBy: PropTypes.func.isRequired,
    changeInput: PropTypes.func.isRequired,
}


// == Export
export default Projects;
