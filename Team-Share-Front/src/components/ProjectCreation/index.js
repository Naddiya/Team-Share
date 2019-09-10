// == Import : npm
import React from 'react';
import { Input, Select, Divider, Form, TextArea } from 'semantic-ui-react'
import { IoIosFolderOpen } from 'react-icons/io';
import PropTypes from 'prop-types';

// == Import : local
import './projectcreation.scss';

const technosFront = [
    { key: 'af', value: 'html', text: 'HTML' },
    { key: 'ax', value: 'css', text: 'CSS' },
    { key: 'al', value: 'js', text: 'Javascript' },
    { key: 'at', value: 'react', text: 'React' },
]

const technosBack = [
    { key: 'az', value: 'php', text: 'PHP' },
    { key: 'aw', value: 'symfo', text: 'Symfony' },
    { key: 'av', value: 'lum', text: 'Lumen' },
    { key: 'am', value: 'twig', text: 'Twig' },
]

const skillsList = [
    { key: 'af', value: 'gestproj', text: 'Gestion de projet' },
    { key: 'ax', value: 'manag', text: 'Management' },
    { key: 'al', value: 'cm', text: 'Community Management' },
    { key: 'ah', value: 'finance', text: 'Finance' },
    { key: 'ag', value: 'git', text: 'Git' },
]

const collabs = [
    { key: 'bc', value: '1', text: 1 },
    { key: 'bg', value: '2', text: 2 },
    { key: 'bj', value: '3', text: 3 },
    { key: 'bk', value: '4', text: 4 },
]

const projType = [
    { key: 'cc', value: 'devweb', text: 'Développement web' },
    { key: 'cg', value: 'devsoft', text: 'Développement software' },
    { key: 'cj', value: 'pyj', text: 'Pyjama party' },
    { key: 'ck', value: 'oct', text: 'Octoberfest' },
]

// == Composant
const ProjectCreation = (
    { projectName,
        changeInputProjectName,
        changeInputStartDate,
        changeInputEndDate,
        changeInputProjectType,
        changeInputCollabNumber,
        changeInputDescription,
        changeInputShortDescription,
        changeInputFrontTechnos,
        changeInputBackTechnos,
        changeSkills,
    }
    ) => {
    
    const handleChangeProjectName = (e) => {
        const { value } = e.target;
        changeInputProjectName(value);
    };

    const handleChangeStartDate = (e) => {
        const { value } = e.target;
        changeInputStartDate(value);
    };

    const handleChangeEndDate = (e) => {
        const { value } = e.target;
        changeInputEndDate(value);
    };

    const handleChangeProjectType = (e, options) => {
        const { value } = options;
        changeInputProjectType(value);
    };

    const handleChangeCollabNumber = (e, options) => {
        const { value } = options;
        changeInputCollabNumber(value);
    };

    const handleChangeDescription = (e) => {
        const { value } = e.target;
        changeInputDescription(value);
    };

    const handleChangeShortDescription = (e) => {
        const { value } = e.target;
        changeInputShortDescription(value);
    };

    const handleChangeFrontTechnos = (e, options) => {
        const { value } = options;
        changeInputFrontTechnos(value);
    };

    const handleChangeBackTechnos = (e, options) => {
        const { value } = options;
        changeInputBackTechnos(value);
    };

    const handleChangeSkills = (e, options) => {
        const { value } = options;
        changeSkills(value);
    };
    return (
        <div className="project">
            <div className="project-heading">
                <h1 className="project-heading-title">Ton super projet</h1>
                <Input  value={projectName} onChange={handleChangeProjectName} placeholder='Nom du projet' />
            </div>
            <div className="project-intro">
                <div className="project-intro-inputs">
                    <h3 className="input-title">Date de début</h3>
                    <input onChange={handleChangeStartDate} type="date" />
                    <h3 className="input-title">Date de fin</h3>
                    <input onChange={handleChangeEndDate} type="date" />
                    <h3 className="input-title">Type de projet</h3>
                    <Select onChange={handleChangeProjectType} placeholder='Choisir' options={projType} />
                    <h3 className="input-title">Nombre de collaborateurs souhaité</h3>
                    <Select onChange={handleChangeCollabNumber} placeholder='Choisir' options={collabs} />
                    <h3 className="input-title">Description en quelques mots</h3>
                    <Input onChange={handleChangeShortDescription} placeholder='Description succinte du projet...' />
                </div>
                <img src="src/assets/teamPic.png" />
            </div>
            <Divider />
            <h2>Les technos</h2>
            <div className="project-technos">
                <Select onChange={handleChangeFrontTechnos} placeholder='Choisir' options={technosFront
                } />
                <Select onChange={handleChangeBackTechnos} placeholder='Choisir'  options={technosBack
                } />
            </div>  
            <h2>Compétences subsidiaires</h2>
            <Divider />
            <div className="project-skills">
                <Select onChange={handleChangeSkills} placeholder='Choisir'  options={skillsList
                } />
            </div> 
            <Divider />
            <div className="project-description">
                <h2 className="project-title">Décris ton projet</h2>
                <Form>
                    <TextArea rows={15} onChange={handleChangeDescription} placeholder='Description complète du projet' />
                </Form>
            </div> 
            <Divider />
            <div className="project-links">
                <div className="project-links-left">
                <h3 className="add-file">Ajouter un fichier</h3>
                <input type="file" />
                </div>
                <div className="project-links-right">
                <ul>
                    <li><IoIosFolderOpen />fichier 1</li>
                    <li><IoIosFolderOpen />fichier 2</li>
                    <li><IoIosFolderOpen />fichier 3</li>
                    <li><IoIosFolderOpen />fichier 4</li>
                </ul>
                </div>
            </div>
            <div className="project-links-validation">
                <input name="send-project" type="checkbox" />
                <label htmlFor="send-project" className="project-validation">I agree, à tout ce que vous voudrez</label>
                <button name="send-project" className="button-link">Submit</button>
            </div>
        </div>
    );
};

ProjectCreation.propTypes = {
    projectName: PropTypes.string.isRequired,
    changeInputProjectName: PropTypes.func.isRequired,
    changeInputStartDate: PropTypes.func.isRequired,
    changeInputEndDate: PropTypes.func.isRequired,
    changeInputProjectType: PropTypes.func.isRequired,
    changeInputDescription: PropTypes.func.isRequired,
    changeInputShortDescription: PropTypes.func.isRequired,
    changeInputCollabNumber: PropTypes.func.isRequired,
    changeInputFrontTechnos: PropTypes.func.isRequired,
    changeInputBackTechnos: PropTypes.func.isRequired,
    changeSkills: PropTypes.func.isRequired,
}

// == Export
export default ProjectCreation;

