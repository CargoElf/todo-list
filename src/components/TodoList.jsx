import { useState, useRef } from "react";
import TodoItem from "./TodoItem";

function TodoList() {
  const [ todoItems, setTodoItems ] = useState([]);
  const [ indexToAssign, setIndexToAssign ] = useState(0);

  const todoText = useRef()

  const todoEntryField = () => {
    return (
      <form onSubmit={addTodoItem}>
        <input
          id="addTodoField"
          type="text"
          ref={todoText}
        />
        <button
          type="submit"
        >
          Add Todo
        </button>
      </form>
    );
  };

  const addTodoItem = (e) => {
    e.preventDefault();
    const text = todoText?.current?.value;
    if (!text) return;

    const currentIndex = indexToAssign;
    const newTodoItem = <TodoItem key={currentIndex} text={text} />;

    setTodoItems([ ...todoItems, newTodoItem ]);

    setIndexToAssign(currentIndex + 1);
    clearInput();
  };

  const clearInput = () => {
    todoText.current.value = '';
  };

  return (
    <>
      {!!todoItems.length && todoItems}
      <div>
        {todoEntryField()}
      </div>
    </>
  );
};

export default TodoList;
