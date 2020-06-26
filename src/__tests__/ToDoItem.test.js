import React from 'react';
import { shallow } from 'enzyme';

import ToDoItem from '../components/ToDoItem';


describe('ToDoItem', () => {
  it('contains proper HTML elements', () => {
    let testItem = { 
      complete: false,
      description: '',
      difficulty: 1,
      assignedTo: ''
    }

    let component = shallow(<ToDoItem item={testItem}/>);

    expect(component.find('.item')).toBeDefined();
    expect(component.find('.item h1')).toBeDefined();
    expect(component.find('.item div')).toBeDefined();
    expect(component.find('.item input')).toBeDefined();
    expect(component.find('.item label')).toBeDefined();
  });
});