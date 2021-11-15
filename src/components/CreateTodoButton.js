import '../assets/css/CreateTodoButton.css';

const CreateTodoButton = ({ setOpenModal }) => {
  const onClickButton = (msg) => {
    setOpenModal(prevState => !prevState);
  };
  return (
    <>
      <button 
        className="CreateTodoButton"
        onClick={onClickButton}
        >
          +
        </button>
    </>
  )
}

export { CreateTodoButton }
