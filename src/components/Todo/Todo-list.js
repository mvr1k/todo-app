import Card from "../shared/Card";
import TodosText from "./Todos-text";
import Style from "./Todo-list.module.css";

const TodoList = () => {
  return (
    <Card>
      <div className={Style["container"]}>
        <div className={Style["main_wrapper"]}>
          <input type="text" name="newTodo" className={Style["input"]} />
          <button type="button" className={Style["btn"]}>
            Add Task
          </button>
        </div>
        <TodosText task="test" />
        <button className={Style["btn__delete"]}>Delete All</button>
      </div>
    </Card>
  );
};

export default TodoList;
