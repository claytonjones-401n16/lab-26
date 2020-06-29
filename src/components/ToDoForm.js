import React from 'react';
import useForm from '../hooks/useForm';
import useFetch from '../hooks/useFetch';

export default function ToDoForm(props) {

  // const [ formData, setFormData ] = useState({});
  
  const { onChange, values } = useForm(updateList);
  const { setRequest, error} = useFetch();


  async function updateList(values) {
    let task = {
      text: values.task || '',
      assignee: values.assignee || '',
      complete: values.complete || false,
      difficulty: values.difficulty || 1
    }

    await props.updateList([...props.currentList, task]);

    await setRequest({ 
      url: 'https://todo-server-401n16.herokuapp.com/api/v1/todo',
      method: 'POST',
      body: JSON.stringify(task)
    });

    if (error) console.log('error:', error);
  }

  return (
    <div id="form">
      <label htmlFor="task">Task:</label>
      <textarea name="task" id="task" onChange={ onChange } ></textarea>

      <div className="assigned-container">
        <label htmlFor="assigned-to">Assigned To:</label>
        <input type="text" name="assignee" id="assigned-to" autoComplete="off" onChange={ onChange }/>
      </div>
      
      <div className="difficulty-container">
        <label htmlFor="difficulty">Difficulty (1-5):</label>
        <input type="range" id="difficulty" name="difficulty" min="1" max="5" onChange={ onChange }/>
      </div>
      
      <div className='complete-container'>
        <label>Complete?</label>
        <input type="checkbox" id="complete" name="complete" onChange={ onChange }/>
      </div>


      <button type="submit" onClick={ async() => {updateList(values)} }>Submit</button>
    </div>
  )
}