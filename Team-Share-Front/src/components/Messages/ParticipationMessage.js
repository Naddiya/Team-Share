import React from 'react'
import { Message } from 'semantic-ui-react'

const list = [
  'Josephine Backer',
  'Charles Aznavour',
]


const ParticipationMessage = () => (
    <Message info header='Demandes de Participation' list={list} />

)

export default ParticipationMessage;