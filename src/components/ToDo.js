import React, { useState, useEffect } from 'react';

import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';

export default function ToDo() {

  const [ list, setList ] = useState([]);

  useEffect(() => {
    let str = `${list.length} Incomplete Task`;

    if (list.length !== 1) {
      str += 's';
    }

    document.title = str;
  }, [list])


  return (
    <div className='toDo'>
      <ToDoForm updateList={ setList } currentList={ list }/>
      <ToDoList list={ list }/>
    </div>
  )
}