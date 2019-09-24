import React from 'react'
import { Message, Button } from 'semantic-ui-react'
import axios from 'axios';

class ParticipationMessage extends React.Component {

  state = {
    token: this.props.token,
    requests: [],
    response: 0,
  }


  handleClickAccept() {
    axios.post('http://92.243.10.99/Team-Share/team-share-back/public/request/response', this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
          console.log(error);
          console.log(this.state);
      });
  }

  handleClickDecline() {
    axios.post('http://92.243.10.99/Team-Share/team-share-back/public/request/response', this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
          console.log(error);
      });
  }

  componentDidMount() {
    axios.post('http://92.243.10.99/Team-Share/team-share-back/public/request/index', this.state)
      .then((response) => {
        const requests = response.data;
        console.log(requests);
        this.setState({
          requests: requests,
          response: requests[0].response,
        })
        console.log('state: ' + this.state);
      })
      .catch((error) => {
          console.log(error);
      });
  }

  render() {  
    return (  
      <div>
        
          {this.state.requests === [] && <Message info header='Pas de demande en cours' />}
        
        
          {this.state.requests.length > 0 && this.state.requests.map((request) => (
            <Message info key={request.id}>{request.user.firstname} {request.user.lastname} - {request.title}
              <Button onClick={this.handleClickAccept} size="mini" color="green">Valider</Button>
              <Button onClick={this.handleClickDecline} size="mini" color="red">Refuser</Button>
            </Message>
          ))}
        
      </div>    
    );
  };
};
export default ParticipationMessage;
