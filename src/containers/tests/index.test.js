import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from "react-redux";
import { createStore } from "redux";
import RestoContainer from '../RestoContainer';
import { restaurantReducer } from "../../redux/restos/restoReducer";
import mockData from './mockData';

describe('<RestoContainer>', () => {
    const store = createStore(restaurantReducer);
    it('renders', () => {
        render(<Provider store={store}><RestoContainer props={mockData} /></Provider>);
    });
});