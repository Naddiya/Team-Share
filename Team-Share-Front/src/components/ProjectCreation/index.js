// == Import : npm
import React from 'react';
import { Button, Input, Select, Divider, Form, TextArea, Dropdown } from 'semantic-ui-react'
import { IoIosFolderOpen } from 'react-icons/io';
import PropTypes from 'prop-types';

// == Import : local
import './projectcreation.scss';

const technos = [
    { key: 'af', value: 'HTML', text: 'HTML' },
    { key: 'ax', value: 'CSS', text: 'CSS' },
    { key: 'al', value: 'Javascript', text: 'Javascript' },
    { key: 'at', value: 'React', text: 'React' },
    { key: 'az', value: 'PHP', text: 'PHP' },
    { key: 'aw', value: 'Symfony', text: 'Symfony' },
]

const skillsList = [
    { key: 'af', value: 'Graphisme', text: 'Graphisme' },
    { key: 'ax', value: 'Big Data', text: 'Big Data' },
]

const collabs = [
    { key: 'bc', value: 1, text: 1 },
    { key: 'bg', value: 2, text: 2 },
    { key: 'bj', value: 3, text: 3 },
    { key: 'bk', value: 4, text: 4 },
]

const projType = [
    { key: 'cc', value: 'Art', text: 'Art' },
    { key: 'cg', value: 'Musique', text: 'Musique' },
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
        changeInputTechnos,
        changeSkills,
        sendSubmit,
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

    const handleChangeTechnos = (e, options) => {
        const { value } = options;
        changeInputTechnos(value);
    };

    const handleChangeSkills = (e, options) => {
        const { value } = options;
        changeSkills(value);
    };

    const handleSubmit = (e) => {
        sendSubmit();
    };
    return (
        <div className="project">
            <Form onSubmit={handleSubmit}>
            <div className="project-heading">
                <h1 className="project-heading-title">Ton super projet</h1>
                <Form.Input  value={projectName} onChange={handleChangeProjectName} placeholder='Nom du projet' />
            </div>
            <div className="project-intro">
                <div className="project-intro-inputs">
                    <h3 className="input-title">Date de début</h3>
                    <Form.Input onChange={handleChangeStartDate} type="date" />
                    <h3 className="input-title">Date de fin</h3>
                    <Form.Input onChange={handleChangeEndDate} type="date" />
                    <h3 className="input-title">Type de projet</h3>
                    <Dropdown multiple selection onChange={handleChangeProjectType} placeholder='Choisir' options={projType} />
                    <h3 className="input-title">Nombre de collaborateurs souhaité</h3>
                    <Select onChange={handleChangeCollabNumber} placeholder='Choisir' options={collabs} />
                    <h3 className="input-title">Description en quelques mots</h3>
                    <Form.Input onChange={handleChangeShortDescription} placeholder='Description succinte du projet...' />
                </div>
                <img src="src/assets/teamPic.png" />
            </div>
            <Divider />
            <h2>Les technos</h2>
            <div className="project-technos">
                <Dropdown multiple selection onChange={handleChangeTechnos} placeholder='Choisir' options={technos} />
            </div>  
            <h2>Compétences subsidiaires</h2>
            <Divider />
            <div className="project-skills">
                <Dropdown multiple selection onChange={handleChangeSkills} placeholder='Choisir'  options={skillsList
                } />
            </div> 
            <Divider />
            <div className="project-description">
                <h2 className="project-title">Décris ton projet</h2>
                    <TextArea rows={15} onChange={handleChangeDescription} placeholder='Description complète du projet' />
            </div> 
            <Divider />
            <div className="project-links-validation">
                <Form.Input name="send-project" type="checkbox" />
                <label htmlFor="send-project" className="project-validation">I agree, à tout ce que vous voudrez</label>
            </div>
            <Button className="submit" color="blue">Envoyer</Button>
            </Form>
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
    changeInputTechnos: PropTypes.func.isRequired,
    changeSkills: PropTypes.func.isRequired,
    sendSubmit: PropTypes.func.isRequired,
}

// == Export
export default ProjectCreation;

