import React, { useState } from 'react';

import useFetch from '../hooks/useFetch';
// import useForm from '../hooks/useForm';

export default function ToDoItem(props) {

  const [taskComplete, setTaskComplete] = useState(props.item.complete);

  // const [put, setPut] = useState(false);

  const { setRequest } = useFetch();

  
  async function updateTask() {
    let task = {...props.item, complete: !taskComplete };
    await setRequest({
      url: `https://todo-server-401n16.herokuapp.com/api/v1/todo/${props.item._id}`,
      method: 'PUT',
      body: task
    });

    await setTaskComplete(!taskComplete);
  }


  async function deleteTask() {
    await setRequest({
      url: `https://todo-server-401n16.herokuapp.com/api/v1/todo/${props.item._id}`,
      method: 'DELETE'
    });

    const getRequest = {
            url: `https://todo-server-401n16.herokuapp.com/api/v1/todo/`,
            method: 'GET'
    
          }
    await props.setRequest( getRequest );
    await props.setRequest( getRequest );
  }



  return (
    <div className="item">
      
      <div className="description">
        <p className="title">Description: </p>
        <p className="text">{props.item.text}</p>
      </div>

      <div className="assigned-to">
        <p className="title">For: </p>
        <p className="text">{props.item.assignee}</p>
      </div>

      <div className="difficulty">
        <p className="title">Difficulty: </p>
        <p className="text">{props.item.difficulty}</p>
      </div>

      <div className="complete">
        <label className="title">Complete:</label>
        <input type="checkbox" checked={taskComplete} onChange={async () => { await updateTask() }}/>
      </div>

      <button className="deleteTask" type="button" onClick={async () => { await deleteTask(); }}>DELETE</button>

    </div>
  )
}