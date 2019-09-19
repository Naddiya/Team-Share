import axios from 'axios';

import { DO_UPDATE } from 'src/store/reducer';

const profileModificationMiddleware = store => next => (action) => {
  switch (action.type) {
    case DO_UPDATE:
        const state = store.getState();
        let data = {
          firstname: state.firstName,
          lastname: state.lastName,
          jobTitle: state.job,
          city: state.city,
          description: state.description,
          skills: state.skills,
          technos: state.technos,
          mail: state.email,
          password: state.password,
          phone: state.phoneNumber,
          urlFacebook: state.urlFacebook,
          urlTwitter: state.urlTwitter,
          urlLinkedin: state.urlLinkedin,
          urlGithub: state.urlGithub,
          photo: state.photo,
          token: state.token,
        }
        const headers = {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Postman-Token': 'f0d22539-4c31-4dc9-a6ca-b513778e229e,59c924e4-c4a5-4def-927c-e4281aa091a1',
            'cache-control': 'no-cache',
        }
        console.log(data);
        axios.post('http://92.243.10.99/Team-Share/team-share-back/public/user/update', data, headers)
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

export default profileModificationMiddleware;
