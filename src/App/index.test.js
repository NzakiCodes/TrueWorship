import React from 'react';
import { render } from 'jest';
import App from '.';

test('renders True Worship', () => {
  const { getByText } = render(<App />);
  const btn = getByText(/True Worship/i);
  expect(btn).toBeInTheDocument();
});
