// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Projects from 'src/components/Projects';
import { changeFilter, doFilter, submitFilter, changeFilterSelection, changeTechnos } from 'src/store/reducer';

/* === State (donnÃ©es) === */
const mapStateToProps = (state) => ({
  inputFilter: state.inputFilter,
  selectedFilter: state.selectedFilter,
});

/* === Actions === */
const mapDispatchToProps = (dispatch) => ({
  
  changeInput: (currentSearch) => {
    console.log('changement de la valeur de input');
    const action = changeFilter(currentSearch);
    dispatch(action);
  },
  submitFilter: () => {
    console.log('soumission du filtre de search');
      const action = doFilter();
      dispatch(action);
  },
  changeFilter: (currentSelection) => {
    console.log('changement du filtre de selection');
      const action = changeFilterSelection(currentSelection);
      dispatch(action);
  },
  submitSelection : ()=> {
    console.log('soumission du filtre de selection')
    const action = submitFilter();
    dispatch(action);
  },
  changeInputTechnos: value => {
    const action = changeTechnos(value);
    dispatch(action);
  }

});


// Container
const ProjectsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Projects);

// == Export
export default ProjectsContainer;

