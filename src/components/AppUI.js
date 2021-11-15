import React from 'react';
import { TodoContext } from '../context/TodoContext';
import { TodoCounter } from './TodoCounter';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { TodoSearch } from './TodoSearch';
import { CreateTodoButton } from './CreateTodoButton';
import { Modal } from './Modal';
import { TodoForm } from './TodoForm';
import { TodosError } from './TodosError';
import { TodosLoading } from './TodosLoading';
import { EmptyTodos } from './EmptyTodos';

import '../assets/css/Modal.css'

const AppUI = () => {
  const {
    error,
    loading,
    searchedTodos,
    completeTodos,
    deleteTodo,
    openModal,
    setOpenModal } = React.useContext(TodoContext);
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        { error && <TodosError error={error} /> }
        { loading && Array(4).fill().map((item, index) => <TodosLoading key={index} />) }
        { (!loading && !searchedTodos.length) && <EmptyTodos /> }
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodos(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
            />
        ))}
      </TodoList>


      {!!openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}

      <CreateTodoButton 
        setOpenModal={setOpenModal}
      />
    </>
  )
}

export { AppUI };
