import React from 'react';
import { shallow } from 'enzyme';

import ToDoList from '../components/ToDoList';

describe('ToDoList', () => {
  it('contains proper HTML elements', () => {
    let component = shallow(<ToDoList list={[]}/>);

    expect(component.find('.list-container')).toBeDefined();
    expect(component.find('.list-container h1')).toBeDefined();
    expect(component.find('.list')).toBeDefined();
  });
});