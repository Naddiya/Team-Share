//npm imports
import React from 'react'
import { Button, Header, Icon, Modal, Form } from 'semantic-ui-react'




const LoginModal = () => (
  <Modal size="tiny" trigger={<button className="button-link button-link-connect">Se connecter</button>} closeIcon>
    <Header icon='user secret' content='Se connecter' />
    <Modal.Content>
      <Form.Input label='Email' placeholder='joe@schmoe.com' type='email' />
      <Form.Input label='Login' placeholder="your password" type='password' />
    </Modal.Content>
    <Modal.Actions>
      <Button className="submit" color='green'>
        <Icon name='checkmark' />submit
      </Button>
    </Modal.Actions>
  </Modal>
)

export default LoginModal;
