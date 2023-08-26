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
          type="text"
          ref={todoText}
        />
        <button type="submit">
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

    setTodoItems([
      ...todoItems,
      <TodoItem
        id={currentIndex}
        key={currentIndex}
        text={text}
        remove={deleteTodoItem}
      />
    ]);

    setIndexToAssign(currentIndex + 1);
    clearInput();
  };

  const deleteTodoItem = (key) => {
    console.log(key)
    console.log({ todoItems })
    console.log(todoItems.map(todo => todo.key))
    const filteredTodoItems = todoItems.filter(todo => {
      return todo.key !== key.toString;
    });
    console.log({filteredTodoItems})

    // setTodoItems(filteredTodoItems);
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
