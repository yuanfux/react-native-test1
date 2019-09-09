import React from 'react';
import { mount } from 'enzyme';
import Test1 from '../src';

describe('<Test1 />', () => {
  test('renders correctly', () => {
    const wrapper = mount(<Test1 />);
    expect(wrapper).toMatchSnapshot();
  });
});
