import { IoMdTrash } from "react-icons/io";
import { MdModeEdit } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import "../App.css";
import { useState } from "react";

const Todo = ({ todo, onRemoveTodo, onUpdateTodo }) => {
  const { id, content } = todo;
  const [editable, setEditable] = useState(false);
  const [newTodo, setNewTodo] = useState(content);

  const removeTodo = () => {
    onRemoveTodo(id);
  };
  const updateTodo = () => {
    const request = {
      id: id,
      content: newTodo,
    };
    onUpdateTodo(request);
    setEditable(false);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        border: "1px solid lightgrey",
        padding: "10px",
        marginTop: "15px",
      }}
    >
      <div>
        {editable ? (
          <input
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            className="todo-input"
            type="text"
            style={{ width: "380px" }}
          />
        ) : (
          content
        )}
      </div>
      <div>
        <IoMdTrash className="todo-icons" onClick={removeTodo} />
        {editable ? (
          <FaCheck className="todo-icons" onClick={updateTodo} />
        ) : (
          <MdModeEdit
            className="todo-icons"
            onClick={() => setEditable(true)}
          />
        )}
      </div>
    </div>
  );
};

export default Todo;
