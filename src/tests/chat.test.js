import Chat from '../Chat';
import React from 'react';
import { render } from '@testing-library/react';

describe ('check Chat.js for errors', () => {
  test('renders learn react link', () => {
    const { getByText } = render(<Chat />);
    const linkElement = getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  })
});