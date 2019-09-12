import axios from 'axios';

import { DO_SUBSCRIBE } from 'src/store/reducer';

const projectCreationMiddleware = store => next => (action) => {
    switch (action.type) {
        case DO_SUBSCRIBE:
            const state = store.getState();
            let data = {
                mail: state.email,
                password: state.password,
                phone: state.phoneNumber,
                }
            const headers = {
                'Content-Type': 'application/json',
                'Postman-Token': 'fd2aeac5-eaaa-430b-b91f-cbd3d90f5208',
                'cache-control': 'no-cache',
            }
            axios.post('http://127.0.0.8000/user/register', data, headers)
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