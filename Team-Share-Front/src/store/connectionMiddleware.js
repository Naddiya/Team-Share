import axios from 'axios';

import { DO_SUBSCRIBE } from 'src/store/reducer';
import { DO_CONNECT } from 'src/store/reducer';

const connectionMiddleware = store => next => (action) => {
    const state = store.getState();
    let data = {};
    const headers = {
        'Content-Type': 'application/json',
        'Postman-Token': 'fd2aeac5-eaaa-430b-b91f-cbd3d90f5208',
        'cache-control': 'no-cache',
    };

    switch (action.type) {
        case DO_SUBSCRIBE:
            data = {
                mail: state.email,
                password: state.password,
                phone: state.phoneNumber,
                }
            headers
            axios.post('http://127.0.0.8000/user/register', data, headers)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
            break;
        case DO_CONNECT:
            data = {
                mail: state.email,
                password: state.password,
                }
            headers
            console.log(data);
            axios.post('http://127.0.0.8000/user/connect', data, headers)
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

export default connectionMiddleware;