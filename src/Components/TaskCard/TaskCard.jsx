import "./TaskCard.css";
import Badge from "../Badge/Badge";

const TaskCard = (props) => {
  // const type1 = "T-1";
  // const status1 = "Todo";
  // const desc = "Textul cardului de la mijloc";
  return (
    <div className="task-container">
      <div className="top">
        <p className="name">{props.name}</p>
        <Badge status={props.status} id={props.id} />
      </div>
      <div className="content">{props.desc}</div>
      <div className="bottom">
        <p className="label">Due date</p>
        <p className="date">{props.date}</p>
      </div>
    </div>
  );
};

export default TaskCard;
