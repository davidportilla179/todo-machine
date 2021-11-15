import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import '../assets/css/TodoSearch.css';

const TodoSearch = () => {
  const { searchValue, setSearchValue} = useContext(TodoContext);

  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <>
      <input
        className="TodoSearch" 
        placeholder="Cebolla"
        value={searchValue}
        onChange={onSearchValueChange}
      />
    </>
  )
}

export { TodoSearch }
