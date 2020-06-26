import React, { useState } from 'react';

export default function ToDoForm(props) {
  const [ description, setDescription ] = useState('');
  const [ assignedTo, setAssignedTo ] = useState('');
  const [ complete, setComplete ] = useState(false);
  const [ difficulty, setDifficulty ] = useState(1);

  function updateDifficulty(e) {
    if (e.target.value > 5) {
      setDifficulty(5);
    }

    else if (e.target.value < 1) {
      setDifficulty(1);
    }

    else {
      setDifficulty(e.target.value);
    }

  }

  function updateList() {
    let task = {
      description,
      assignedTo,
      complete,
      difficulty
    }

    props.updateList([...props.currentList, task]);
  }

  return (
    <div id="form">
      <label htmlFor="task">Task:</label>
      <textarea name="task" id="task" onChange={ (e) => { setDescription(e.target.value) } } value={description}></textarea>

      <div className="assigned-container">
        <label htmlFor="assigned-to">Assigned To:</label>
        <input type="text" id="assigned-to" autoComplete="off" value={assignedTo} onChange={ (e) => { setAssignedTo(e.target.value) } }/>
      </div>
      
      <div className="difficulty-container">
        <label htmlFor="difficulty">Difficulty (1-5):</label>
        <input type="number" min="1" max="5" value={difficulty} onChange={ updateDifficulty }/>
      </div>
      
      <div className='complete-container'>
        <label>Complete?</label>
        <input type="checkbox" id="complete" checked={complete} onChange={ () => {setComplete(!complete)} }/>
      </div>


      <button type="submit" onClick={ updateList }>Submit</button>
    </div>
  )
}