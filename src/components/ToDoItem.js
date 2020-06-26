import React, { useState } from 'react';

export default function ToDoItem(props) {

  const [complete, setComplete] = useState(props.item.complete);


  return (
    <div className="item">
      <h1>Task</h1>
      <div>Description: {props.item.description}</div>
      <div>Assigned To: {props.item.assignedTo}</div>
      <label htmlFor="complete">Complete:</label>
      <input type="checkbox" checked={complete} onChange={() => { setComplete(!complete) }}/>
      <div>Difficulty: {props.item.difficulty}</div>
    </div>
  )
}