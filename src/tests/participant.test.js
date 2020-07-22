import Participant from '../Participant';
import React from 'react';
import ReactDOM from 'react-dom';

describe ('Check Participants for errors', () => {
  it('renders learn react link', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Participant />, div);
    ReactDOM.unmountComponentAtNode(div);
    })
});