import axios from 'axios';

import { DO_SUBSCRIBE, DO_CONNECT, DO_DISCONNECT, changeToken, giveProfileInfos } from 'src/store/reducer';

const connectionMiddleware = store => next => (action) => {
    const state = store.getState();
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Postman-Token': 'f0d22539-4c31-4dc9-a6ca-b513778e229e,59c924e4-c4a5-4def-927c-e4281aa091a1',
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
            axios.post('http://92.243.10.99/Team-Share/team-share-back/public/user/register', dataSubs, headers)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
            break;
        case DO_CONNECT:
            const dataConnect = {
                username: state.email,
                password: state.password,
                }
            headers,
            console.log(dataConnect);
            axios.post('http://92.243.10.99/Team-Share/team-share-back/public/login', dataConnect, headers)
            .then((response) => {
                console.log(response);
                let token = response.data.token;
                console.log(token);
                store.dispatch(changeToken(token));

                const params = {
                    token,
                }
                console.log(params);

            axios.post('http://92.243.10.99/Team-Share/team-share-back/public/user/myprofile', params)
            .then((response) => {
                const persoInfos = response.data[0];
                console.log(persoInfos);
                store.dispatch(giveProfileInfos(persoInfos));
            })
            .catch((error) => {
                console.log(error);
            });
            })
            .catch((error) => {
                console.log(error);
            });
            break;
        case DO_DISCONNECT:
            const dataDc = {
                token: state.token,
                }
            headers,
            axios.post('http://92.243.10.99/Team-Share/team-share-back/public/logout', dataDc, headers)
            .then((response) => {
                console.log(response);
                store.dispatch(changeToken(''));
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