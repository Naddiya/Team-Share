// == Import : npm
import React from 'react';
import Modal from 'react-modal';
import { NavLink } from 'react-router-dom';


// == Import : local
import './navbar.scss';
import LoginModal from 'src/components/Login/';


const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    height: '900px',
    width: '750px'
  },
};

Modal.setAppElement('#root')
// == Composant
class Navbar extends React.Component {
  constructor() {
    super();
 
    this.state = {
      modalIsOpen: false
    };
 
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  openModal() {
    this.setState({modalIsOpen: true});
  }
 
  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#000';
    this.subtitle.style.fontSize = '2em';
    this.subtitle.style.textAlign = 'center';
    this.subtitle.style.margin = '2em 0';
  }
 
  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return(
      <div className="navbar">
        <div>
          <NavLink to="/" exact>
            <img className="navbar-logo" alt="logo" src="src/assets/logo-team-share_cut.png"/>
          </NavLink>
        </div>
        <ul className="navbar-links">
          <li>
            <NavLink to="/projects" className="navbar-link">Projets</NavLink>
          </li>
          <li>
            <NavLink to="/profile" className="navbar-link">Mon Profil</NavLink>
          </li>
          <li>
            <LoginModal className="button-link-connect"/>
          </li>
          <li className="navbar-link">
            <button onClick={this.openModal} className= "button-link button-link-subscribe">
              <a href="#" className= "button-link button-link-subscribe">S'inscrire</a>
            </button>
          </li>
        </ul>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Subscribe Modal"
        >
 
          <button className="modal-close" onClick={this.closeModal}><img src="src/assets/cross.png" /></button>
          <h2 className="modal-title" ref={subtitle => this.subtitle = subtitle}>Inscrivez-vous</h2>
          <form className="modal-form">
            <label>Identifiant</label>
            <input />
            <label>Mot de passe</label>
            <input />
            <label>Confirmation du mot de passe</label>
            <input />
            <label>Email</label>
            <input />
            <label>Téléphone</label>
            <input />
            <button className="modal-close modal-close-send">Envoyer</button>
          </form>
        </Modal>
      </div>
    )
  };
}

// == Export
export default Navbar;
