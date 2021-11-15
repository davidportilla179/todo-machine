import { useEffect, useState } from 'react';
import { TodoProvider } from './context/TodoContext';
import { AppUI } from './components/AppUI';

function App() {

  return (
    <>
      <TodoProvider>
        <AppUI />
      </TodoProvider>
    </>
  );
}

export default App;
