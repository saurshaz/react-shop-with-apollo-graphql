// AddressForm.react.test.js
import React from 'react';
import AddressForm from '../AddressForm';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow, render, mount } from 'enzyme';
Enzyme.configure({ adapter: new Adapter() })

test('AddressForm component test', () => {
  const wrapper = shallow(
    <AddressForm
        key={'abc'}
        product={{ description: 'description', miniDescription: 'mini description'}}
        refresh={() => 'refresh done'}
    />
  );
  expect(wrapper).toMatchSnapshot();
});