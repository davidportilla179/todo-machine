import React from 'react';
import {TodoContext} from '../context/TodoContext';
import '../assets/css/TodoCounter.css';

const TodoCounter = () => {
  const { completedTodos, totalTodos } = React.useContext(TodoContext);
  return (
    <>
      <h2 className="TodoCounter">
        Has completado {completedTodos} de {totalTodos} TODOs
      </h2>
    </>
  );
}

export { TodoCounter };
