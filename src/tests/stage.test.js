import Stage from '../Stage';
import React from 'react';
import ReactDOM from 'react-dom';

describe ('Check Stage.js for errors', () => {
  it('renders learn react link', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Stage />, div);
    ReactDOM.unmountComponentAtNode(div);
    })
});