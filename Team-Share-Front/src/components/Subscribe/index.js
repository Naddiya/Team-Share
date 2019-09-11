//npm imports
import React from 'react'
import { Button, Header, Icon, Modal, Form } from 'semantic-ui-react'
import PropTypes from 'prop-types';
import axios from 'axios';

import './subscribe.scss';  

const SubscribeModal = (
  {
    email,
    password,
    phoneNumber,
    changeInputEmail,
    changeInputPassword,
    changeInputPasswordConfirmation,
    changeInputPhoneNumber,
  }
  ) => {

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

    const handleSubmit = (e) => {
      axios.post('/user', {
        identification,
        email,
        password,
        phoneNumber,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }

  return (
    <Modal size="small" trigger={<button className="button-link button-link-subscribe">S'inscrire</button>} closeIcon>
      <Header icon='user secret' content="S'inscrire" />
      <Form onSubmit={handleSubmit} >
      <Modal.Content>
        <Form.Input onChange={handleChangeEmail} label='Email' placeholder='joe@mail.com' type='email' />
        <Form.Input onChange={handleChangePassword} label='Mot de passe' placeholder="Mot de passe" type='password' />
        <Form.Input onChange={handleChangePasswordConfirmation} label='Confirmation' placeholder="Confirmation du mot de passe" type='password' />
        <Form.Input onChange={handleChangePhoneNumber} label='Téléphone' placeholder="06 43 55 99 00" type='text' />
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

SubscribeModal.propTypes = {
  changeInputEmail: PropTypes.func.isRequired,
  changeInputPassword: PropTypes.func.isRequired,
  changeInputPasswordConfirmation: PropTypes.func.isRequired,
  changeInputPhoneNumber: PropTypes.func.isRequired,
}

export default SubscribeModal;
