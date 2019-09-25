// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Projects from 'src/components/Projects';
import { changeFilter, 
        changeTechnos, 
        changeSkills, 
        changeTags, 
        changeSort,
        submitFilter,
      } from 'src/store/reducer';


/* === State (donnÃ©es) === */
const mapStateToProps = (state) => ({
  inputFilter: state.inputFilter,
});

/* === Actions === */
const mapDispatchToProps = (dispatch) => ({
  changeInput: (value) => {
    const action = changeFilter(value);
    dispatch(action);
  },
  changeInputTechnos: (value) => {
    const action = changeTechnos(value);
    dispatch(action);
  },
  changeInputSkills: (value) => {
    const action = changeSkills(value);
    dispatch(action);
  },
  changeInputTags: (value) => {
    const action = changeTags(value);
    dispatch(action);
  },
  changeInputSortBy: (value) => {
    const action = changeSort(value);
    dispatch(action);
  },
  submitInputFilter: (value) => {
    const action = submitFilter(value);
    dispatch(action);
  },
  changeInputTechnos: value => {
    const action = changeTechnos(value);
    dispatch(action);
  },
});


// Container
const ProjectsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Projects);

// == Export
export default ProjectsContainer;

