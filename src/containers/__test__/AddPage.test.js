// Link.react.test.js
import React from 'react';
import AddPage from '../AddPage';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow, render, mount } from 'enzyme';
Enzyme.configure({ adapter: new Adapter() })

test('AddPage component test', () => {

    const wrapper = shallow(
        <AddPage mutate={ () => {}} />
    );
    expect(wrapper).toMatchSnapshot();
});