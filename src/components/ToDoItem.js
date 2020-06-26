import React, { useState } from 'react';

export default function ToDoItem(props) {

  const [taskComplete, setTaskComplete] = useState(props.item.complete);


  return (
    <div className="item">
      
      <div className="description">
        <p className="title">Description: </p>
        <p className="text">{props.item.description}</p>
      </div>

      <div className="assigned-to">
        <p className="title">For: </p>
        <p className="text">{props.item.assignedTo}</p>
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