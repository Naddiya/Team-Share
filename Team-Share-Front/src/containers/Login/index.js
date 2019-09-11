// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Login from 'src/components/Login';
import { changeEmail, changePassword } from 'src/store/reducer';

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
});

// Container
const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);

// == Export
export default LoginContainer;

