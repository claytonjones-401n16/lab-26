import React from 'react';
import { shallow } from 'enzyme';

import ToDoForm from '../components/ToDoForm';

describe('ToDoForm', () => {
  it('contains proper HTML elements', () => {
    let component = shallow(<ToDoForm />);

    expect(component.find('#form')).toBeDefined();
    expect(component.find('button')).toBeDefined();
    expect(component.find('.assigned-container')).toBeDefined();
    expect(component.find('.complete-container')).toBeDefined();
    expect(component.find('.difficulty-container')).toBeDefined();
  })
});