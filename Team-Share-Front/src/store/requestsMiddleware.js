import axios from 'axios';

import { DO_REQUEST } from 'src/store/reducer';

const requestsMiddleware = store => next => (action) => {
  switch (action.type) {
    case DO_REQUEST:
        const state = store.getState();
        
        let data = {
          token: state.token,
          project: state.project.id,
        }
        const headers = {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Postman-Token': 'f0d22539-4c31-4dc9-a6ca-b513778e229e,59c924e4-c4a5-4def-927c-e4281aa091a1',
            'cache-control': 'no-cache',
        }
        console.log(data);
        axios.post('http://92.243.10.99/Team-Share/team-share-back/public/request/new', data, headers)
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

export default requestsMiddleware;
