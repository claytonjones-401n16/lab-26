import React, { useEffect } from 'react';
import ToDoItem from './ToDoItem';

export default function ToDoList(props) {
  let items = [];
  
  props.list.forEach( (item, i) => {
    items.push(<ToDoItem item={item} key={i}/>)
  });

  return (
    <div>
      <h1>List</h1>
      <div>
        { items }
      </div>
    </div>
  )
}