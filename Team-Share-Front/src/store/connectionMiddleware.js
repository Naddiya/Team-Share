import axios from 'axios';

import { DO_SUBSCRIBE } from 'src/store/reducer';
import { DO_CONNECT } from 'src/store/reducer';

const connectionMiddleware = store => next => (action) => {
    const state = store.getState();
    const headers = {
        'Access-Control-Allow-Origin': 'http://92.243.10.99',
        'Content-Type': 'application/json',
        'Postman-Token': '020e6101-5a10-494f-89c1-978ca6aa44ae,f5baf393-747d-4389-8858-b28786b907a6',
        'cache-control': 'no-cache',
    };

    switch (action.type) {
        case DO_SUBSCRIBE:
            const dataSubs = {
                mail: state.email,
                password: state.password,
                phone: state.phoneNumber,
                }
            headers,
            console.log(dataSubs);
            axios.post('http://92.243.10.99/Team-Share/user/register', dataSubs, headers)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
            break;
        case DO_CONNECT:
            const dataConnect = {
                mail: state.email,
                password: state.password,
                }
            headers,
            console.log(data);
            axios.post('http://127.0.0.8000/Team-Share/user/connect', dataConnect, headers)
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