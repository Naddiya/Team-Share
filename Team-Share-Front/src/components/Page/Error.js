import React from 'react';
import { Segment, Header } from 'semantic-ui-react';

const Error = () => (
  <Segment>
    <Header as="h2">Erreur</Header>
    <p>La page demandée n'a pas été trouvée.</p>
  </Segment>
);

export default Error;
