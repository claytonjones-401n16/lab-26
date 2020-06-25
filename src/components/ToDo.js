import React, { useState } from 'react';

import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';

export default function ToDo() {
  const [ list, setList ] = useState([]);
  

  return (
    <div>
      <h1>Main ToDo</h1>
      <ToDoForm updateList={ setList } currentList={ list }/>
      <ToDoList list={ list }/>
    </div>
  )
}