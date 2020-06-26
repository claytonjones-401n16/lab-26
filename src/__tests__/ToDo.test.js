import React from 'react';
import { mount } from 'enzyme';


import ToDo from '../components/ToDo';

describe('ToDo', () => {
  it('list populates with an item with submit button is clicked', () => {
    let component = mount(<ToDo />);

    let button = component.find('#form button');
    button.simulate('click');

    expect(component.find('.item')).toBeDefined();
  });

  it('rendered the proper components', () => {
    let component = mount(<ToDo />);

    expect(component.find('#form')).toBeDefined();
    expect(component.find('.list')).toBeDefined();
    expect(component.find('header')).toBeDefined();
    expect(component.find('footer')).toBeDefined();

  });
});