import React from 'react'
import { Message, Button } from 'semantic-ui-react'
import axios from 'axios';
import { changeRequestId } from '../../store/reducer';


// import './participation.scss'

class ParticipationMessage extends React.Component {

  state = {
    token: {
    "token": this.props.token,
    requests: [],
    },
    data: {
      token: this.props.token,
      response: 1,
      id: this.props.requestId,
    },
    dataDecline: {
      token: this.props.token,
      response: 0,
      id: this.props.requestId,
    },
    requests: [],
  }

  handleClickAccept = () => {
    axios.post('http://92.243.10.99/Team-Share/team-share-back/public/request/response', this.state.data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
          console.log(error);
          console.log(this.state.data);
      });
  }

  handleClickDecline = () => {
    axios.post('http://92.243.10.99/Team-Share/team-share-back/public/request/response', this.state.dataDecline)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
          console.log(error);
      });
  }

  componentDidMount() {
    axios.post('http://92.243.10.99/Team-Share/team-share-back/public/request/index', this.state.token)
      .then((response) => {
        const requests = response.data;
        console.log(requests);
        this.setState({
          requests: requests,
        })
        console.log('state: ' + this.state.token);
      })
      .catch((error) => {
          console.log(error);
          console.log(this.state.token);
      });
  }

  render() {  
    return (  
      <div>
          {this.state.requests.length === 0 && <Message info header='Pas de demande en cours' />}       
          {this.state.requests.length > 0 && this.state.requests.map((request) => (
            <Message info key={request.id}>{request.user.firstname} {request.user.lastname} - {request.title}
              <div className="message-buttons">
                <Button onClick={this.handleClickAccept} size="mini" color="green">Valider</Button>
                <Button onClick={this.handleClickDecline} size="mini" color="red">Refuser</Button>
              </div>
            </Message>
          ))}
      </div>    
    );
  };
};
export default ParticipationMessage;
