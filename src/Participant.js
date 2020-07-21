import React from 'react';
import store from './store';

export default class Participant extends React.Component {
  //static defaultProps = [];

  render() {
    const activeSession = store.participants.filter(p => p.inSession);
    const leftSession = store.participants.filter(p => !p.inSession);
    const participantList = activeSession.map( (p) => { return (
      <ul key={p.id}>
        <li className="name">{p.name}</li>
        <li className="avatar"><img src={p.avatar} alt={p.name}/></li>
        <li className="status">{p.onStage ? <p>On Stage</p> : <p>In Session</p>}</li>
      </ul>);
    });
    const leftParticipantList = leftSession.map( (p) => { return (
      <ul key={p.id}>
        <li className="name">{p.name}</li>
        <li className="avatar"><img src={p.avatar} alt={p.name}/></li>
        <li className="status"><p>Left Session</p></li>
      </ul>);
    });

    return (
    <div>
      {participantList}
      {leftParticipantList}
    </div>
    );
  }


}

// {props.cards.map((card) => <Card key={card.id} title={card.title} content={card.content} /> )}