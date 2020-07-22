/* eslint-disable no-fallthrough */
import React from 'react';
import './styles/chat.css';
// import store from './store';

export default class Chat extends React.Component {
  render() {
    //sort by time to an array
    // const chatOrder = store.chatEvents.sort((p1, p2) => (p2.timestamp - p1.timestamp));


    return (
      <div className="chat">
        <h1>MESSAGES</h1>
      </div>
    );
  }
}

//access name for participantId from participants
//access avatar for participantId from participants
// const chatLogEntries = chatOrder.map(p => {
//   if (p.message) {
//     return (
//       <ul className="typeMessages">
//         <li className="avatar"><p>this be an avatar</p></li> to be replaced w/ img tag
//         <li className="name">{p.participantId}</li> to be replaced w/ name
//         <li className="timestamp">{p.timestamp}</li> to be replaced with formatted time hh:mm AM/PM
//         <li className="message">{p.message}</li>
//       </ul>
//     );
//   } else {
//     let thing = 22221;
//     let formattedString = '';
//     switch (p.type) {
//       case ('clap'):
//         formattedString =  p.type + 'ped';
//         break;
//       case ('thumbs-down'):
//         thing = 22220;
//       case ('thumbs-up'):
//         formattedString =  'gave a ' + p.type + { thing };
//         break;
//       case ('join-stage'):
//         formattedString =  'joined the stage';
//         break;
//       case ('join'):
//         formattedString =  'joined';
//         break;
//       case ('leave'):
//         formattedString =  'left';
//         break;
//       case ('leave-stage'):
//         formattedString =  'left the stage';
//         break;
//       case ('raise-hand'):
//         formattedString =  'raised their hand';
//         break;
//       default: 
//         formattedString = 'invalid type';
//     }
//     return (
//       <div className="typeReact">
//         <span className="type"><p> {formattedString}</p></span>
//       </div>
//     );
//   }
// });
// //view messages by time
// const chatLog = chatOrder.map(p => {
//   return (
//     {chatLogEntries}
//   );
// });