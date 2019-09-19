// == Import : npm
import React from 'react';
import { Modal, Button, Icon, Form, Header, Divider } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

// == Import : local

// const technos = [
//     { key: 'af', value: 'HTML', text: 'HTML' },
//     { key: 'ax', value: 'CSS', text: 'CSS' },
//     { key: 'al', value: 'Javascript', text: 'Javascript' },
//     { key: 'at', value: 'React', text: 'React' },
//     { key: 'az', value: 'PHP', text: 'PHP' },
//     { key: 'aw', value: 'Symfony', text: 'Symfony' },
// ]

const skillsList = [
    { key: 'af', name: 'Graphisme', text: 'Graphisme' },
    { key: 'ax', name: 'Big Data', text: 'Big Data' },
]

// == Composant
const UpdateModal = (
  {
    changeInputFirstName,
    changeInputLastName,
    changeInputJob,
    changeInputCity,
    changeInputUrlFb,
    changeInputUrlTwit,
    changeInputUrlGit,
    changeInputUrlLink,
    changeInputDescription,
    changeInputEmail,
    changeInputPassword,
    changeInputPasswordConfirmation,
    changeInputPhoneNumber,
    changeSkills,
    changeTechnos,
    sendUpdate,
    technos,
  }
  ) => {

    const handleChangeFirstName = (e) => {
        const { value } = e.target;
        changeInputFirstName(value);
    };

    const handleChangeLastName = (e) => {
        const { value } = e.target;
        changeInputLastName(value);
    };

    const handleChangeJob = (e) => {
        const { value } = e.target;
        changeInputJob(value);
    };

    const handleChangeCity = (e) => {
        const { value } = e.target;
        changeInputCity(value);
    };

    const handleChangeUrlFacebook = (e) => {
        const { value } = e.target;
        changeInputUrlFb(value);
    };

    const handleChangeUrlTwitter = (e) => {
        const { value } = e.target;
        changeInputUrlTwit(value);
    };

    const handleChangeUrlGithub = (e) => {
        const { value } = e.target;
        changeInputUrlGit(value);
    };

    const handleChangeUrlLinkedin = (e) => {
        const { value } = e.target;
        changeInputUrlLink(value);
    };
    
    const handleChangeDescription = (e) => {
        const { value } = e.target;
        changeInputDescription(value);
    };

    const handleChangeEmail = (e) => {
        const { value } = e.target;
        changeInputEmail(value);
      };
  
    const handleChangePassword = (e) => {
        const { value } = e.target;
        changeInputPassword(value);
      };
  
    const handleChangePasswordConfirmation = (e) => {
        const { value } = e.target;
        changeInputPasswordConfirmation(value);
      };
  
    const handleChangePhoneNumber = (e) => {
        const { value } = e.target;
        changeInputPhoneNumber(value);
      };
    
    const handleChangeSkills = (e, options) => {
        const { value } = options;
        changeSkills(value);
    };
    
    const handleChangeTechnos = (e, options) => {
        const { value } = options;
        changeTechnos(value);
    };

    const handleSubmit = (e) => {
        sendUpdate();
    };
    
    return (
        <Modal size="small" trigger={<Button className="submit" color="blue">Modifier mon profil</Button>} closeIcon>
            <Header icon='user secret' content="Modification du profil" />
            <Form onSubmit={handleSubmit} >
            <Modal.Content>
                <Form.Input onChange={handleChangeLastName} label='Nom' placeholder="Nom" type='text' />
                <Form.Input onChange={handleChangeFirstName} label='Prénom' placeholder="Prénom" type='text' />
                <Form.Input onChange={handleChangeJob} label='Intitulé du poste' placeholder="Intitulé du poste" type='text' />
                <Form.Input onChange={handleChangeCity} label='Ville' placeholder="Ville" type='text' />
                <Form.Input onChange={handleChangeUrlFacebook} label='Lien Facebook' placeholder="Lien Facebook" type='text' />
                <Form.Input onChange={handleChangeUrlTwitter} label='Lien Twitter' placeholder="Lien Twitter" type='text' />
                <Form.Input onChange={handleChangeUrlGithub} label='Lien GitHub' placeholder="Lien GitHub" type='text' />
                <Form.Input onChange={handleChangeUrlLinkedin} label='Lien LinkedIn' placeholder="Lien LinkedIn" type='text' />
                <Form.Input onChange={handleChangeDescription} label='Description' placeholder="Description" type='text' />
                <Form.Input onChange={handleChangeEmail} label='Email' placeholder='joe@mail.com' type='email' />
                <Form.Input onChange={handleChangePhoneNumber} label='Téléphone' placeholder="06 43 55 99 00" type='text' />
                <Form.Dropdown onChange={handleChangeSkills} fluid multiple selection placeholder="Compétences" options={skillsList} />
                <Form.Dropdown onChange={handleChangeTechnos} fluid multiple selection placeholder="Technos" options={technos} />
                <Form.Input onChange={handleChangePassword} label='Mot de passe' placeholder="Mot de passe" type='password' />
                <Form.Input onChange={handleChangePasswordConfirmation} label='Confirmation' placeholder="Confirmation du mot de passe" type='password' />
            </Modal.Content>
            <Modal.Actions>
                <Button className="submit" color='green'>
                <Icon name='checkmark' />Envoyer
                </Button>
            </Modal.Actions>
            </Form>
        </Modal>
    );
};

// == Export
export default UpdateModal;