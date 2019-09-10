//npm imports
import React from 'react'
import { Button, Header, Icon, Modal, Form } from 'semantic-ui-react'


import './subscribe.scss';  

const SubscribeModal = () => (
  <Modal size="small" trigger={<button className="button-link button-link-subscribe">S'inscrire</button>} closeIcon>
    <Header icon='user secret' content="S'inscrire" />
    <Modal.Content>
      <Form.Input label='Identifiant' placeholder='Identifiant' type='text' />
      <Form.Input label='Email' placeholder='joe@mail.com' type='email' />
      <Form.Input label='Mot de passe' placeholder="Mot de passe" type='password' />
      <Form.Input label='Confirmation' placeholder="Confirmation du mot de passe" type='password' />
      <Form.Input label='Téléphone' placeholder="06 43 55 99 00" type='text' />
    </Modal.Content>
    <Modal.Actions>
      <Button className="submit" color='green'>
        <Icon name='checkmark' />Envoyer
      </Button>
    </Modal.Actions>
  </Modal>
)

export default SubscribeModal;
