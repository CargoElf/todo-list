import { useState, useRef } from "react";

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
    const todoObject = { key: currentIndex, text: text };

    setTodoItems([ ...todoItems, todoObject ]);
    setIndexToAssign(currentIndex + 1);
    clearInput()
  };

  const clearInput = () => {
    todoText.current.value = '';
  };

  const todoItemDisplay = () => {
    return (
      <>
        {todoItems.map(({ key, text }) => {
          return (
            <div key={key}>
              <p>{text}</p>
            </div>
          )
        })}
      </>
    );
  };


  return (
    <>
      {!!todoItems.length && todoItemDisplay()}
      <div>
        {todoEntryField()}
      </div>
    </>
  );
};

export default TodoList;
