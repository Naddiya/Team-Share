// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Navbar from 'src/components/Navbar';

/* === State (données) === */
const mapStateToProps = (state) => ({
  logged: state.logged,
});

/* === Actions === */
const mapDispatchToProps = {};

// Container
const NavbarContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Navbar);

// == Export
export default NavbarContainer;

