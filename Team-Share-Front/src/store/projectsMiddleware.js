import axios from 'axios';

import { DO_FILTER } from 'src/store/reducer';

// Types


const projectsMiddleware = store => next => (action) => {
  // console.log('Je suis le middleware, et je laisse passer cette action: ', action);    
  //   switch (action.type) {
  //     case DO_FILTER:
  //       // const state: store.getState();
  //       console.log('on filtre avec le middleware') )
  //       let data = {
  //         projects: state.project,
  //       }
  //       const headers = {
  //         'Access-Control-Allow-Origin': '*',
  //         'Content-Type': 'application/json',
  //         'Postman-Token': 'f0d22539-4c31-4dc9-a6ca-b513778e229e,59c924e4-c4a5-4def-927c-e4281aa091a1',
  //         'cache-control': 'no-cache',
  //     }
  //     console.log(data);
  //     axios.get('http://92.243.10.99/Team-Share/team-share-back/public/projects', data, headers)
  //     .then((response) => {
  //         console.log(response);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //   });
  //     break;
  //   default:
  //     next(action);
}
   








// action creators


export default projectsMiddleware;
