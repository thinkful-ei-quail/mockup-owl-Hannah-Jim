import React from 'react';
import store from './store';
import './styles/participant.css';

export default class Participant extends React.Component {
  //static defaultProps = [];

  render() {
    const activeSession = store.participants.filter(p => p.inSession);
    const leftSession = store.participants.filter(p => !p.inSession);
    const participantList = activeSession.map( (p) => { 
      let status = '';
      if(p.onStage) {
        status = ' on stage';
      } else {
        status = ' in session';
      }
      return (
      <div className="participant" key={p.id}>
        <img src={p.avatar} alt={p.name} className="list-avatar"/>
        <div className="active-wrapper">
          <h6 className="name">{p.name}</h6>
          <div className="status-active">{status}</div>
        </div>
      </div>);
    });
    const leftParticipantList = leftSession.map( (p) => { return (
      <div className="participant" key={p.id}>
        <img src={p.avatar} alt={p.name} className="list-avatar"/>
        <div className="notActive-wrapper">
          <h6 className="name">{p.name}</h6>
          <div className="status-notActive"> left session</div>
        </div>
      </div>);
    });

    return (
    <div className="participant-list">
      {participantList}
      {leftParticipantList}
    </div>
    );
  }


}