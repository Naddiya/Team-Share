// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import ParticipationMessage from 'src/components/Messages/ParticipationMessage';

/* === State (donnÃ©es) === */
const mapStateToProps = (state) => ({
    token: state.token,
});

/* === Actions === */
const mapDispatchToProps = (dispatch) => ({});


// Container
const ParticipationMessageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ParticipationMessage);

// == Export
export default ParticipationMessageContainer;

