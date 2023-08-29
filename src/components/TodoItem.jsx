import { useState } from "react";

function TodoItem(props) {
  const { id, text, remove, editTodo } = props;

  const [ todoText, setTodoText ] = useState(text);
  const [ isComplete, setIsComplete ] = useState(false);
  const [ isEditing, setIsEditing ] = useState(false);

  const changeCompletionStatus = () => {
    const currentCompletionStatus = isComplete;
    setIsComplete(!currentCompletionStatus);
  };

  const changeIsEditing = () => {
    const currentIsEditing = isEditing;
    setIsEditing(!currentIsEditing);
  };

  const updateText = (e) => {
    setIsEditing(false);

    const updatedText = e.target.value;
    if (updatedText === todoText) return;

    if (!updatedText) {
      remove(id);
      return;
    };

    setTodoText(updatedText);
    editTodo(id, updatedText);
  };

  const editButton = () => {
    if (isComplete || isEditing) return;

    return (
      <button onClick={() => changeIsEditing()}>Edit</button>
    );
  };

  const buttons = () => {
    return (
      <>
        <button onClick={() => changeCompletionStatus()}>
          Mark {isComplete && "in"}complete
        </button>
        {editButton()}
        <button onClick={() => remove(id)}>Delete</button>
      </>
    );
  };

  return (
    <div>
      {isEditing ? (
        <input
          defaultValue={todoText}
          onBlur={(e) => updateText(e)}
        />
      ) : (
        <span
          style={{
            marginRight: '1.5rem',
            textDecoration: (isComplete && "line-through")
          }}
        >
          {todoText}
        </span>
      )}
      {buttons()}
    </div>
  );
};

export default TodoItem;