import React from 'react';
import ReactDOM from 'react-dom';
//import { render } from '@testing-library/react';
import App from '../App';

describe ('Check App.js for errors', () => {
  it('renders learn react link', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
  })
});