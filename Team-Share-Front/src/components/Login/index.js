//npm imports
import React from 'react'
import { Button, Header, Icon, Modal, Form } from 'semantic-ui-react'
import PropTypes from 'prop-types';



const LoginModal = ({ changeInputEmail, changeInputPassword }) => {

  const handleChangeEmail = (e) => {
    const { value } = e.target;
    changeInputEmail(value);
  };

  const handleChangePassword = (e) => {
    const { value } = e.target;
    changeInputPassword(value);
  };

  return (
    <Modal size="small" trigger={<button className="button-link button-link-connect">Se connecter</button>} closeIcon>
      <Header icon='user secret' content='Se connecter' />
      <Form>
      <Modal.Content>
        <Form.Input onChange={handleChangeEmail} label='Email' placeholder='joe@schmoe.com' type='email' />
        <Form.Input onChange={handleChangePassword} label='Login' placeholder="your password" type='password' />
      </Modal.Content>
      <Modal.Actions>
        <Button className="submit" color='green'>
          <Icon name='checkmark' />Connexion
        </Button>
      </Modal.Actions>
      </Form>
    </Modal>
  );
};

LoginModal.propTypes = {
  changeInputEmail: PropTypes.func.isRequired,
  changeInputPassword: PropTypes.func.isRequired,
}

export default LoginModal;
