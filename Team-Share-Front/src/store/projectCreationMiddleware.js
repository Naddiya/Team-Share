import axios from 'axios';

import { DO_SUBMIT } from 'src/store/reducer';

const projectCreationMiddleware = store => next => (action) => {
  switch (action.type) {
    case DO_SUBMIT:
        const state = store.getState();
        let data = {
          title: state.projectName,
          description: state.shortDescription,
          content: state.description,
        //   image (not obligatoire)
          started_at: state.startDate,
          finished_at: state.endDate,
          tag: state.projectType, 
          nbCollaborator: state.collabNumber,
          technos: state.technos,
          skills: state.skills,
        }
        const headers = {
            'Content-Type': 'application/json',
            'Postman-Token': 'fd2aeac5-eaaa-430b-b91f-cbd3d90f5208',
            'cache-control': 'no-cache',
        }
        console.log(data);
        axios.post('http://92.243.10.99/Team-Share/team-share-back/public/project/new', data, headers)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
        break;
    default:
       next(action);
  }
};

export default projectCreationMiddleware;
