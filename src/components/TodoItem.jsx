import { useState } from "react";

function TodoItem(props) {
  const { id, text, remove } = props;

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
      <p>{text}</p>
      {buttons()}
    </div>
  );
};

export default TodoItem;