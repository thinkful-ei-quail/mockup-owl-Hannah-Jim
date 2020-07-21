import Participants from '../Participants';
import React from 'react';
import { render } from '@testing-library/react';

describe ('Check Participants for errors', () => {
  test('renders learn react link', () => {
    const { getByText } = render(<Participants />);
    const linkElement = getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  })
});