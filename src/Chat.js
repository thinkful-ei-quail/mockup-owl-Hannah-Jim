/* eslint-disable no-fallthrough */
import React from 'react';
import './styles/chat.css';
import store from './store';

export default class Chat extends React.Component {
  render() {
    //sort by time to an array
    const chatOrder = store.chatEvents.sort((p1, p2) => (p2.timestamp - p1.timestamp));
    const chatLogEntries = chatOrder.map(p => {
      const participant = store.participants.find(participant => p.participantId === participant.id);
      if (p.message) {  
        return (
          <ul className="typeMessages">
            <li className="avatar"><img class="list-avatar" src={participant.avatar} alt={participant.name}/></li>
            <li className="name">{participant.name}</li>
            <li className="timestamp">{p.timestamp}</li> to be replaced with formatted time hh:mm AM/PM
            <li className="message">{p.message}</li>
          </ul>
        );
      } else {
        let formattedString = '';
        switch (p.type) {
          case ('clap'):
            formattedString = p.type + 'ped';
            break;
          case ('thumbs-down'):
          //fall through
          case ('thumbs-up'):
            formattedString = 'gave a ' + p.type;
            break;
          case ('join-stage'):
            formattedString = 'joined the stage';
            break;
          case ('join'):
            formattedString = 'joined';
            break;
          case ('leave'):
            formattedString = 'left';
            break;
          case ('leave-stage'):
            formattedString = 'left the stage';
            break;
          case ('raise-hand'):
            formattedString = 'raised their hand';
            break;
          default:
            formattedString = 'invalid type';
        }
        return (
          <div className="typeReact">
            <span className="type"><p>{participant.name} {formattedString}</p></span>
          </div>
        )
      }
    });

    return (
      <div className="chat">
        {chatLogEntries}
      </div>
    );
  }
}