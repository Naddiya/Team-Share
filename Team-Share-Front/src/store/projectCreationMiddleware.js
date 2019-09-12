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
          started_at: state.startDate,
          finished_at: state.endDate,
          nbCollaborator: state.collabNumber,
          technos: state.frontTechnos,
          technos: state.backTechnos,
          skills: state.skills,
            }
        const headers = {
            'Content-Type': 'application/json',
            'Postman-Token': 'fd2aeac5-eaaa-430b-b91f-cbd3d90f5208',
            'cache-control': 'no-cache',
        }
        console.log(data);
        axios.post('http://127.0.0.8000/project/new', data, headers)
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
