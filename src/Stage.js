import React from 'react';
import store from './store';

export default class Stage extends React.Component {

  render() {
    const activeSession = store.participants.filter(p => p.onStage);
    const participantList = activeSession.map( (p) => { return (
      <div key={p.id}>  
        <div className="name">{p.name}</div>
        <div className="volume"></div>
        <div className="avatar"><img src={p.avatar} alt={p.name}/></div>
      </div>);
    });

    return (
    <div>
      {participantList}
    </div>
    );
  }

}