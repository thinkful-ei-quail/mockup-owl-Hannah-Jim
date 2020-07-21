import Stage from '../Stage';
import React from 'react';
import { render } from '@testing-library/react';

describe ('Check Stage.js for errors', () => {
  test('renders learn react link', () => {
    const { getByText } = render(<Stage />);
    const linkElement = getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  })
});