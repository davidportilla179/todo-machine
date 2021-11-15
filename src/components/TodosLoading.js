import React from 'react'
import '../assets/css/TodosLoading.css'
const TodosLoading = () => {
  return (
    <div className="LoadingTodo-container">
      <span className="Loading-Todo-completeIcon">Estamos cargando ...</span>
      <p className="Loading-Todo-text">Cargando TODOs ...</p>
      <span className="Loading-Todo-deleteIcon">Estamos cargando ...</span>
    </div>
  )
}

export { TodosLoading };