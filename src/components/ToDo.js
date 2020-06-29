import React, { useState, useEffect } from 'react';

import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';
import useFetch from '../hooks/useFetch';

export default function ToDo() {

  const [ list, setList ] = useState([]);
  const { setRequest, response } = useFetch();

  useEffect(() => {
    let req = {
      url: 'https://todo-server-401n16.herokuapp.com/api/v1/todo',
      method: 'GET'
    }

    setRequest(req);

  }, [setRequest]);

  useEffect(() => { 

    let incomplete = 0;

    list.forEach(item => {
      if (!item.complete) {
        incomplete++;
      }
    })

    let str = `${incomplete} Incomplete Task`;

    if (incomplete !== 1) {
      str += 's';
    }

    document.title = str;
  }, [list])

  useEffect(() => {
    console.log('response:', response)
    if (response) {
      setList(response);
    }
  }, [response]);

  return (
    <div className='toDo'>
      <ToDoForm updateList={ setList } currentList={ list }/>
      <ToDoList list={ list }/>
    </div>
  )
}