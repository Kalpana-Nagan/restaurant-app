import React from 'react';
import { render } from '@testing-library/react';
import mockData from '../../containers/tests/mockData';
import RestaurantCard from '../RestaurantCard';

describe('<RestaurantCard>', () => {
    it('renders', () => {
        render(<RestaurantCard props={mockData} />);
    });
});