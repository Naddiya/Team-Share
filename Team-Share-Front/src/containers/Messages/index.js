// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import ParticipationMessage from 'src/components/Messages/ParticipationMessage';
import { acceptRequest } from '../../store/reducer';



/* === State (donnÃ©es) === */
const mapStateToProps = (state) => ({
    token: state.token,
});

/* === Actions === */
const mapDispatchToProps = (dispatch) => ({
    sendAcceptRequest: () => {
      const action = acceptRequest();
      dispatch(action);
    },
    sendDeclineRequest: () => {
      const action = declineRequest();
      dispatch(action);
    }
});


// Container
const ParticipationMessageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ParticipationMessage);

// == Export
export default ParticipationMessageContainer;

