import Card from "../shared/Card";
import TodosText from "./Todos-text";
import Style from "./Todo-list.module.css";
import { useRef } from "react";

const TodoList = (props) => {
  const todoInputRef = useRef();

  const addTodoHandler = (event) => {
    if (event.keyCode && event.keyCode !== 13) return;
    const todoText = todoInputRef.current.value;
    if (!todoText) return;
    const id = Math.random().toString();
    props.addTodo(todoText, id);
  };

  const todoHtml = props.allTodos.map((item, index) => <TodosText task={item.todo} key={index} id={item.id} deleteTodo={props.deleteTodo} />);

  return (
    <Card>
      <div className={Style["container"]}>
        <div className={Style["main_wrapper"]}>
          <input type="text" name="newTodo" className={Style["input"]} ref={todoInputRef} onKeyDown={addTodoHandler} />
          <button type="button" className={Style["btn"]} onClick={addTodoHandler}>
            Add Task
          </button>
        </div>
        {todoHtml}
        <button className={Style["btn__delete"]} onClick={props.deleteAllTodo}>
          Delete All
        </button>
      </div>
    </Card>
  );
};

export default TodoList;
