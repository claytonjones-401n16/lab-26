import React, { useState, useEffect } from 'react';

import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';
import useFetch from '../hooks/useFetch';
import Settings from './Settings';
import { SettingsContext } from '../Contexts';

export default function ToDo() {


  const [ list, setList ] = useState([]);
  const { setRequest, response } = useFetch();
  const [ displayCount, setDisplayCount ] = useState(4);
  const [ showComplete, setShowComplete ] = useState(true);


  useEffect(() => {
    let req = {
      url: 'https://todo-server-401n16.herokuapp.com/api/v1/todo',
      method: 'GET'
    }

    setRequest(req);

  }, [setRequest]);


  useEffect(() => {
    if (response) {
      setList(response);
    }
  }, [response]);

  return (
    <div className='toDo'>
      <SettingsContext.Provider value={{ displayCount, setDisplayCount, showComplete, setShowComplete }}>
        <ToDoForm updateList={ setList } currentList={ list } setRequest={ setRequest }/>
        <Settings />
        <ToDoList list={ list } setRequest={ setRequest }/>
      </SettingsContext.Provider>
    </div>
  )
}