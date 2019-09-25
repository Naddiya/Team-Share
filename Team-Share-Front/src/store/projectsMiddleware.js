// import axios from 'axios';
// import { CHANGE_INPUTTAGS, CHANGE_TECHNOS, CHANGE_SKILLS } from 'src/store/reducer';


// // Types


// const projectsMiddleware = store => next => (action) => {
//    console.log('Je suis le middleware, et je laisse passer cette action: ', action);
//   switch (action.type) {
//     case CHANGE_INPUTTAGS :
//       const state = store.getState();
//       let data = {
//         projects: state.projects,
//       }
//   axios.get(`http://92.243.10.99/Team-Share/team-share-back/public/tag/${state.tags}`)
//   .then((response) => {
//       const projectsTag = response;
//       this.setState({projects: projectsTag});
//       // console.log(response.data);
//   })
//   .catch((error) => {
//       console.log(error);
//   });
//     case CHANGE_TECHNOS :
//   axios.get(`http://92.243.10.99/Team-Share/team-share-back/public/techno/${state.technos}`)
//   .then((response) => {
//       let projectsTechnos = response;
//       this.setState({projects: projectsTechnos});
//       console.log(response.data);
//   })
//   .catch((error) => {
//       console.log(error);
//   });
//   case  CHANGE_SKILLS :
//   axios.get(`http://92.243.10.99/Team-Share/team-share-back/public/skill/${state.skills}`)
//   .then((response) => {
//       let ProjectsSkill = response;
//       this.setState({projects: ProjectsSkill});
//       console.log(response.data);
//   })
//   .catch((error) => {
//       console.log(error);
//   });
//   default:
//     next(action);
// }
// };

// export default projectsMiddleware;



