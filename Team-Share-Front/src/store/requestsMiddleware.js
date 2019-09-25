import axios from 'axios';

import { ACCEPT_REQUEST, DECLINE_REQUEST } from 'src/store/reducer';

const requestsMiddleware = store => next => (action) => {
  switch (action.type) {
    case ACCEPT_REQUEST:
        const state = store.getState();
        let data = {
          token: state.token,
          request: 1,
        }
        axios.post('http://92.243.10.99/Team-Share/team-share-back/public/request/response', data)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
            console.log(error);
            console.log(data);
        });
        break;
    default:
       next(action);
  }
};

export default requestsMiddleware;
