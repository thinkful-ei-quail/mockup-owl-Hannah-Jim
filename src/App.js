import React from 'react';
import Participant from './Participant';
import Stage from './Stage';
import Chat from './Chat';
import './styles/app.css';

function App() {
  return (
    <div>
 
      <main>   
        <section className="section1">       
          <div className="menu-header">
            <button className="side-bar-tab side-bar-tab__active">Chat</button>
            <button className="side-bar-tab">Participants</button>
          </div>
          {/* if statement for rendering the active view-chat/participant list */}
          <Participant />
          <Chat />
        </section>
        <section className="section2">
          <div className="stage"><Stage /> </div>
        </section>
     
      </main>
    </div>
  );
}

export default App;