// == Import : npm
import React from 'react';
import { Input, Select, Divider, Form, TextArea } from 'semantic-ui-react'
import { IoIosFolderOpen } from 'react-icons/io';

// == Import : local
import './projectcreation.scss';

const technosFront = [
    { key: 'af', value: 'af', text: 'HTML' },
    { key: 'ax', value: 'ax', text: 'CSS' },
    { key: 'al', value: 'al', text: 'Javascript' },
    { key: 'at', value: 'al', text: 'React' },
]

const technosBack = [
    { key: 'az', value: 'al', text: 'PHP' },
    { key: 'aw', value: 'al', text: 'Symfony' },
    { key: 'av', value: 'al', text: 'Lumen' },
    { key: 'am', value: 'al', text: 'Twig' },
]

const skills = [
    { key: 'af', value: 'af', text: 'Gestion de projet' },
    { key: 'ax', value: 'ax', text: 'Management' },
    { key: 'al', value: 'al', text: 'Community Management' },
    { key: 'ah', value: 'al', text: 'Finance' },
    { key: 'ag', value: 'al', text: 'Git' },
]

const collabs = [
    { key: 'bc', value: 'af', text: '1' },
    { key: 'bg', value: 'ax', text: '2' },
    { key: 'bj', value: 'al', text: '3' },
    { key: 'bk', value: 'al', text: '4' },
]

const projType = [
    { key: 'cc', value: 'af', text: 'Développement web' },
    { key: 'cg', value: 'ax', text: 'Développement software' },
    { key: 'cj', value: 'al', text: 'Pyjama party' },
    { key: 'ck', value: 'al', text: 'Octoberfest' },
]

// == Composant
const ProjectCreation = () => (
  <div className="project">
    <div className="project-heading">
        <h1 className="project-heading-title">Ton super projet</h1>
        <Input placeholder='Nom du projet' />
    </div>
    <div className="project-intro">
        <div className="project-intro-inputs">
            <h3 className="input-title">Date de début</h3>
            <input type="date" />
            <h3 className="input-title">Date de fin</h3>
            <input type="date" />
            <h3 className="input-title">Type de projet</h3>
            <Select placeholder='Choisir' options={projType} />
            <h3 className="input-title">Nombre de collaborateurs souhaité</h3>
            <Select placeholder='Choisir' options={collabs} />
            <h3 className="input-title">Description en quelques mots</h3>
            <Input placeholder='Description succinte du projet...' />
        </div>
        <img src="src/assets/teamPic.png" />
    </div>  
    <Divider />
    <h2>Les technos</h2>
    <div className="project-technos">
        <Select placeholder='Choisir' options={technosFront
        } />
        <Select placeholder='Choisir'  options={technosBack
        } />
    </div>  
    <h2>Compétences subsidiaires</h2>
    <Divider />
    <div className="project-skills">
        <Select placeholder='Choisir'  options={skills
        } />
        <Select placeholder='Choisir' options={skills
        } />
        <Select placeholder='Choisir' options={skills
        } />
    </div> 
    <Divider />
    <div className="project-description">
        <h2 className="project-title">Décris ton projet</h2>
        <Form>
            <TextArea rows={15} placeholder='Description complète du projet' />
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

// == Export
export default ProjectCreation;

