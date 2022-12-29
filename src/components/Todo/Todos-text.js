import { Fragment, useState } from "react";
import Style from "./Todos-text.module.css";

const TodosText = (props) => {
  const [completed, setCompleted] = useState(false);

  const todoCompleteHandler = (event) => {
    setCompleted((prev) => !prev);
  };

  const todoRemoveHandler = () => {
    props.deleteTodo(props.id);
  };

  return (
    <Fragment>
      <div className={Style["tasks"]}>
        <span className={completed ? Style["stroke"] : ""}>{props.task}</span>
      </div>
      <i className="correct__icon" onClick={todoCompleteHandler}></i>
      <i className="remove__icon" onClick={todoRemoveHandler}></i>
    </Fragment>
  );
};

export default TodosText;
