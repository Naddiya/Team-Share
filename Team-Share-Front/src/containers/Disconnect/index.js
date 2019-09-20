// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Disconnect from 'src/components/Disconnect';
import { doDisconnect } from 'src/store/reducer';

/* === State (données) === */
const mapStateToProps = (state) => ({
  logged: state.logged,
});

/* === Actions === */
const mapDispatchToProps = (dispatch) => ({
    sendDisconnect: () => {
        const action = doDisconnect();
        dispatch(action);
    },
});

// Container
const DisconnectContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Disconnect);

// == Export
export default DisconnectContainer;

