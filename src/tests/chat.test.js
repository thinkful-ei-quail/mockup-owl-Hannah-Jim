import Chat from '../Chat';
import React from 'react';
import ReactDOM from 'react-dom';

describe ('check Chat.js for errors', () => {
  it('renders learn react link', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Chat />, div);
    ReactDOM.unmountComponentAtNode(div);
    })
});