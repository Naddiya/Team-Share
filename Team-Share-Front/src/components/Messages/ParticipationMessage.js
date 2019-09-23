import React from 'react'
import { Message, Button } from 'semantic-ui-react'
import axios from 'axios';

const list = [
  'Josephine Backer',
  'Charles Aznavour',
]


class ParticipationMessage extends React.Component {

  state = {
    token: this.props.token,
    requests: [],
  }

  componentDidMount() {
    axios.get('http://92.243.10.99/Team-Share/team-share-back/public/request/index', this.state.token)
      .then((response) => {
        const requests = response.data;
        console.log(requests);
        this.setState({
          requests: requests,
          response: requests.response,
        })
      })
      .catch((error) => {
          console.log(error);
      });
  }

  render() {  
    return (
          this.state.requests.map((request) => (
            <Message info key={request.title}>{request.user.firstname} {request.user.lastname} - {request.title} 
              <Button size="mini" color="green">Valider</Button>
              <Button size="mini" color="red">Refuser</Button>
            </Message>
          ))
      // <Message info header='Demandes de Participation' list={list} />
    );
  };
};
export default ParticipationMessage;