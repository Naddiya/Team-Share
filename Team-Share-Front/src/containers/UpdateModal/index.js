// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import UpdateModal from 'src/components/UpdateModal';
import {
    changeFirstName,
    changeLastName,
    changeJob,
    changeCity,
    changeUrlFb,
    changeUrlTwit,
    changeUrlGit,
    changeDescription,
    changeEmail,
    changePassword,
    changePasswordConfirmation,
    changePhoneNumber,
    changeSkills,
    doUpdate,
    } from 'src/store/reducer';

/* === State (données) === */
const mapStateToProps = (state) => ({
  token: state.token,
});

/* === Actions === */
const mapDispatchToProps = (dispatch) => ({
    changeInputFirstName: (value) => {
        const action = changeFirstName(value);
        dispatch(action);
    },
    changeInputLastName: (value) => {
        const action = changeLastName(value);
        dispatch(action);
    },
    changeInputJob: (value) => {
        const action = changeJob(value);
        dispatch(action);
    },
    changeInputCity: (value) => {
        const action = changeCity(value);
        dispatch(action);
    },
    changeInputUrlFb: (value) => {
        const action = changeUrlFb(value);
        dispatch(action);
    },
    changeInputUrlTwit: (value) => {
        const action = changeUrlTwit(value);
        dispatch(action);
    },
    changeInputUrlGit: (value) => {
        const action = changeUrlGit(value);
        dispatch(action);
    },
    changeInputDescription: (value) => {
        const action = changeDescription(value);
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
    changeSkills: value => {
        const action = changeSkills(value);
        dispatch(action);
    },
    sendUpdate: () => {
        const action = doUpdate();
        dispatch(action);
    },
});

// Container
const UpdateModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UpdateModal);

// == Export
export default UpdateModalContainer;

