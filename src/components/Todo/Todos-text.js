import style from "./Todos-text.module.css";

const TodosText = (props) => {
  return (
    <div className={style["tasks"]}>
      <span>{props.task}</span>
      <i className="correct__icon"></i>
      <i className="delete__icon"></i>
    </div>
  );
};

export default TodosText;
