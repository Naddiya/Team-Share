// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import ProjectCreation from 'src/components/ProjectCreation';
import { 
    changeProjectName,
    changeStartDate,
    changeEndDate,
    changeProjectType,
    changeCollabNumber,
    changeDescription,
    changeShortDescription,
    changeTechnos,
    changeSkills,
    doSubmit,
    } from 'src/store/reducer';

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
    changeInputCollabNumber: value => {
        const action = changeCollabNumber(value);
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
    changeInputTechnos: value => {
        const action = changeTechnos(value);
        dispatch(action);
    },
    changeSkills: value => {
        const action = changeSkills(value);
        dispatch(action);
    },
    sendSubmit: () => {
        const action = doSubmit();
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

