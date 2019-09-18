// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Home from 'src/components/Home';

/* === State (données) === */
const mapStateToProps = (state) => ({
  token: state.token,
});

/* === Actions === */
const mapDispatchToProps = {};

// Container
const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

// == Export
export default HomeContainer;

