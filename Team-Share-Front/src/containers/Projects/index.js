// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Projects from 'src/components/Projects';
import { changeFilter, doFilter } from 'src/store/reducer';

/* === State (donnÃ©es) === */
const mapStateToProps = (state) => ({
  inputFilter: state.inputFilter,
  filtered: state.filtered,
});

/* === Actions === */
const mapDispatchToProps = (dispatch) => ({
  changeInput: (value) => {
    console.log('changement de la valeur de input');
    const action = changeFilter(value);
    dispatch(action);
  },
  
  // filterBy : (value) => {
  //   console.log('je voudrais afficher les projects par technos');
  //   const filterTechnos = technos.filter((technos, projects) => technos === projects.name)
  //   const action = doFilter(value);
  //    dispatch(action);
  //   }
});


// Container
const ProjectsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Projects);

// == Export
export default ProjectsContainer;

