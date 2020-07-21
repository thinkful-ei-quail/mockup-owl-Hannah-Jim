import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

describe ('Check App.js for errors', () => {
  test('renders learn react link', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  })
});