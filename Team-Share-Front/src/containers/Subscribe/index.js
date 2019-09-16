// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Subscribe from 'src/components/Subscribe';
import { 
    changeEmail,
    changePassword,
    changePasswordConfirmation,
    changePhoneNumber,
    doSubscribe,
    } from 'src/store/reducer';

/* === State (données) === */
const mapStateToProps = (state) => ({
  logged: state.logged,
});

/* === Actions === */
const mapDispatchToProps = (dispatch) => ({
    changeInputEmail: (value) => {
        const action = changeEmail(value);
        dispatch(action);
    },
    changeInputPassword: (value) => {
        const action = changePassword(value);
        dispatch(action);
    },
    changeInputPasswordConfirmation: (value) => {
        const action = changePasswordConfirmation(value);
        dispatch(action);
    },
    changeInputPhoneNumber: (value) => {
        const action = changePhoneNumber(value);
        dispatch(action);
    },
    sendSubscribe: () => {
        const action = doSubscribe();
        dispatch(action);
    },
});

// Container
const SubscribeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Subscribe);

// == Export
export default SubscribeContainer;

