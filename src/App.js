import React from 'react';
import Participant from './Participant';
import Stage from './Stage';
import Chat from './Chat';

function App() {
  return (
    <div>
    <header><h1>Header</h1></header>
    <main>
      <Participant />
      <Stage />
      <Chat />
    </main>
    <footer>Copyright 212093 by Hannah and Jim bc they rock!!!!</footer>
    </div>
  );
}

export default App;