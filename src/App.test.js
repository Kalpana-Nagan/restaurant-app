import React from 'react';
import { render } from '@testing-library/react';
import { mockData } from '../src/containers/tests/mockData'
import App from './App';

describe('<App>', () => {
  it('renders', () => {
    render(<App {...mockData} />);
  });
});

