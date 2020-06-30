import React from 'react';
import ToDoItem from './ToDoItem';

export default function ToDoList(props) {
  let items = [];
  
  props.list.forEach( (item, i) => {
    items.push(<ToDoItem item={item} key={i} setRequest={ props.setRequest }/>)
  });

  return (
    <div className='list-container'>
      <h1>Your Tasks:</h1>
      <div className='list'>
        { items }
      </div>
    </div>
  )
}