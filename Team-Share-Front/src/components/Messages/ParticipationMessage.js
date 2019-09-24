import React from 'react'
import { Message, Button } from 'semantic-ui-react'
import axios from 'axios';


import './participation.scss'

class ParticipationMessage extends React.Component {

  state = {
    "token": this.props.token,
    requests: [],
  }

  componentDidMount() {
    axios.post('http://92.243.10.99/Team-Share/team-share-back/public/request/index', this.state.token)
      .then((response) => {
        const requests = response.data;
        console.log(requests);
        console.log('token : ' + this.state.token);
        this.setState({
          requests: requests,
        })
      })
      .catch((error) => {
          console.log(error);
          console.log('token : ' + this.state.token);
      });
  }

  render() {  
    return (
          this.state.requests.map((request) => (
            <Message info key={request.title}>{request.user.firstname} {request.user.lastname} - {request.title} 
              <div className="message-buttons">
              <Button size="mini" color="green">Valider</Button>
              <Button size="mini" color="red">Refuser</Button>
              </div>
            </Message>
          ))
      // <Message info header='Demandes de Participation' list={list} />
    );
  };
};
export default ParticipationMessage;