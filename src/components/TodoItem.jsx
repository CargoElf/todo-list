import { useState } from "react";

function TodoItem(props) {
  const { key, text } = props;

  const [ todoText, setTodoText ] = useState(text);

  return (
    <div key={key}>
      <p>{todoText}</p>
    </div>
  );
};

export default TodoItem;