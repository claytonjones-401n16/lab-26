import React, { useState, useEffect } from 'react';

import useFetch from '../hooks/useFetch';
import useForm from '../hooks/useForm';

export default function ToDoItem(props) {

  const [taskComplete, setTaskComplete] = useState(props.item.complete);

  const { setRequest, response } = useFetch();


  // const { onChange } = useForm(updateTask);
  useEffect(() => {
    let task = {...props.item, complete: taskComplete }

    // async function updateTask() {
    //   await setRequest({
    //     url: `https://todo-server-401n16.herokuapp.com/api/v1/todo/${props.item._id}`,
    //     method: 'PUT',
    //     body: JSON.stringify(task)
    //   })
    // }

    // updateTask();

  }, [taskComplete, props.item, setRequest])



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
        <input type="checkbox" checked={taskComplete} onChange={() => { setTaskComplete(!taskComplete) }}/>
      </div>

    </div>
  )
}