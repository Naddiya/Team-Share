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
          image: state.image,
          startedAt: state.startDate,
          finishedAt: state.endDate,
          tags: state.projectType, 
          nbCollaborator: state.collabNumber,
          technos: state.technos,
          skills: state.skills,
          image: state.image,
          urlFacebook: state.urlFacebook,
          urlTwitter: state.urlTwitter,
          urlTipeee: state.urlTipeee,
          urlGithub: state.urlGithub,
          token: state.token,
        }
        const headers = {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Postman-Token': 'f0d22539-4c31-4dc9-a6ca-b513778e229e,59c924e4-c4a5-4def-927c-e4281aa091a1',
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
