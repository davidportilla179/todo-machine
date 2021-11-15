import '../assets/css/TodoList.css';

const TodoList = ({ children }) => {
  return (
    <section>
      <ul>
        { children }
      </ul>
    </section>
  )
}

export { TodoList }
