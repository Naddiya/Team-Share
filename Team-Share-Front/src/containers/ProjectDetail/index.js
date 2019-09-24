// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import ProjectDetail from 'src/components/ProjectDetail';
import { doRequest } from 'src/store/reducer';

/* === State (donnÃ©es) === */
const mapStateToProps = (state) => ({
    token: state.token,
    id: state.id,
});

/* === Actions === */
const mapDispatchToProps = (dispatch) => ({});


// Container
const ProjectDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProjectDetail);

// == Export
export default ProjectDetailContainer;

