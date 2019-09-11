// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Subscribe from 'src/components/Subscribe';
import { 
    changeIdentification,
    changeEmail,
    changePassword,
    changePasswordConfirmation,
    changePhoneNumber,
    } from 'src/store/reducer';

/* === State (données) === */
const mapStateToProps = (state) => ({
  logged: state.logged,
  identification: state.identification,
});

/* === Actions === */
const mapDispatchToProps = (dispatch) => ({
    changeInputIdentification: (value) => {
        const action = changeIdentification(value);
        dispatch(action);
    },
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
});

// Container
const SubscribeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Subscribe);

// == Export
export default SubscribeContainer;

