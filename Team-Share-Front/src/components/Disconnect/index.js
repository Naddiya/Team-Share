//npm imports
import React from 'react'
import { Button, Modal, Form, Icon, Header, Divider } from 'semantic-ui-react'
import PropTypes from 'prop-types';



const DisconnectModal = ({ sendDisconnect }) => {
  
  const handleSubmit = (e) => {
    sendDisconnect();
  }
  return (
    <Modal size="small" trigger={<button className="button-link button-link-connect">Se Déconnecter</button>} closeIcon>
      <Header icon='user secret' content='Se connecter' />
      <Form onSubmit={handleSubmit} >
      <Modal.Content>
        Voulez-vous vous déconnecter ?
      </Modal.Content>
      <Divider />
      <Modal.Actions>
        <Button className="submit" color='green'>
          <Icon name='checkmark' />Déconnexion
        </Button>
      </Modal.Actions>
      </Form>
    </Modal>
  );
};

DisconnectModal.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
}

export default DisconnectModal;
