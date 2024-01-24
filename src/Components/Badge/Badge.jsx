import "./Badge.css";
import { useTaskContext } from "../../context/TaskContext";

function Badge(props) {
  const { taskList, setTaskList } = useTaskContext();
  const badgeColor = () => {
    switch (props.status) {
      case "Todo":
        return "grey";
      case "Pending":
        return "yellow";
      case "In Progress":
        return "blue";
      case "Completed":
        return "green";
      default:
        return "grey";
    }
  };

  const handleSelectChange = (e) => {
    setTaskList(
      taskList.map((task) =>
        task.id === props.id ? { ...task, status: e.target.value } : task
      )
    );
  };

  return (
    <select
      className={`status ${badgeColor()}`}
      value={props.status}
      onChange={handleSelectChange}
    >
      <option value="Todo">Todo</option>
      <option value="Pending">Pending</option>
      <option value="In Progress">In Progress</option>
      <option value="Completed">Completed</option>
    </select>
  );
}

export default Badge;
