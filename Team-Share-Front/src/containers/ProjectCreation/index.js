// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import ProjectCreation from 'src/components/ProjectCreation';
import { changeProjectName } from 'src/store/reducer';
import { changeStartDate } from 'src/store/reducer';
import { changeEndDate } from 'src/store/reducer';
import { changeProjectType } from 'src/store/reducer';
import { changeDescription } from 'src/store/reducer';
import { changeShortDescription } from 'src/store/reducer';

/* === State (données) === */
const mapStateToProps = (state) => ({
    projectName: state.projectName,
});

/* === Actions === */
const mapDispatchToProps = (dispatch) => ({
    changeInputProjectName: (value) => {
        const action = changeProjectName(value);
        dispatch(action);
    },
    changeInputStartDate: value => {
        const action = changeStartDate(value);
        dispatch(action);
    },
    changeInputEndDate: value => {
        const action = changeEndDate(value);
        dispatch(action);
    },
    changeInputProjectType: value => {
        const action = changeProjectType(value);
        dispatch(action);
    },
    changeInputDescription: value => {
        const action = changeDescription(value);
        dispatch(action);
    },
    changeInputShortDescription: value => {
        const action = changeShortDescription(value);
        dispatch(action);
    },
});

// Container
const ProjectCreationContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProjectCreation);

// == Export
export default ProjectCreationContainer;

