import { useState } from "react";

function TodoItem(props) {
  const { id, text, remove } = props;

  const [ todoText, setTodoText ] = useState(text);
  const [ isComplete, setIsComplete ] = useState(false);

  const changeCompletionStatus = () => {
    const currentCompletionStatus = isComplete;
    setIsComplete(!currentCompletionStatus);
  }

  return (
    <div>
      <p>{todoText}</p>
      <button onClick={() => changeCompletionStatus()}>
        Mark {isComplete && "in"}complete
      </button>
      <button onClick={() => remove(id)}>Delete</button>
    </div>
  );
};

export default TodoItem;