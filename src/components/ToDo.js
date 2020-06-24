import React from 'react';

import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';

export default function ToDo() {
  return (
    <div>
      <h1>Main ToDo</h1>
      <ToDoForm />
      <ToDoList />
    </div>
  )
}