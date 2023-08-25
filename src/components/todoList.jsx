import { useState, useRef } from "react";

function TodoList() {
  const [ todoItems, setTodoItems ] = useState([]);
  const [ todoItem, setTodoItem ] = useState('');

  const todoText = useRef()

  const todoEntryField = () => {
    return (
      <form onSubmit={addTodoItem}>
        <input
          id="addTodoField"
          type="text"
          ref={todoText}
          onChange={e => updateTodoItem(e)}
        />
        <button type="submit">submit it</button>
      </form>
    );
  };



  const addTodoItem = (e) => {
    e.preventDefault();
    if (!todoItem) return;
    console.log({ todoItem });


    // console.log({newTodo})
    // setTodoItems({ ...todoItems,  })
  };


  return (
    <h1>{todoEntryField()}</h1>
  );
};

export default TodoList;
