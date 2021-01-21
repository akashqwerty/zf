import React from 'react';
import { render, mount } from '@testing-library/react';
import App from './App'

test('check if button length is found incorrect', () => {
  
  const { getAllByText } = render(<App />);
  const linkElement = getAllByText(/Add/);
  expect(linkElement.length).toBe(21);
});