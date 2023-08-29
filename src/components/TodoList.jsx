import { useState, useRef } from "react";
import TodoItem from "./TodoItem";

function TodoList() {
  const [ todoItems, setTodoItems ] = useState([]);
  const [ indexToAssign, setIndexToAssign ] = useState(0);

  const todoText = useRef();

  const todoEntryField = () => {
    return (
      <form onSubmit={addTodoItem}>
        <input type="text" ref={todoText} />
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

    setTodoItems([...todoItems, { id: currentIndex, text: text }]);

    setIndexToAssign(currentIndex + 1);
    clearInput();
  };

  const deleteTodoItem = (id) => {
    const filteredTodoItems = todoItems.filter(todo => {
      return todo.id !== id;
    });

    setTodoItems(filteredTodoItems);
  };

  const editTodoItem = (id, text) => {
    const todoIndex = todoItems.findIndex(todoItem => todoItem.id === id);
    const todoItemsToUpdate = todoItems;
    todoItemsToUpdate[todoIndex].text = text;

    setTodoItems(todoItemsToUpdate);
  };

  const displayTodoItems = () => {
    return (
      <>
        {todoItems.map(({ id, text }) => {
          return (
            <TodoItem
              id={id}
              key={id}
              text={text}
              remove={deleteTodoItem}
              editTodo={editTodoItem}
            />
          );
        })}
      </>
    );
  };

  const clearInput = () => {
    todoText.current.value = '';
  };

  return (
    <>
      {!!todoItems.length && displayTodoItems()}
      <div>
        {todoEntryField()}
      </div>
    </>
  );
};

export default TodoList;
