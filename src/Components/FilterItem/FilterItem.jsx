import "../FilterItem/FilterItem.css";
// import { TaskManagerContext } from "../../App";
// import { useContext } from "react";

const FilterItem = (props) => {
  //   const { array } = useContext(TaskManagerContext);
  //   console.log("Context", array);

  return (
    <div
      className={`filter-item ${props.active ? "active" : ""}`}
      onClick={props.selectStatus}
    >
      {props.status}
      <span>{props.count}</span>
    </div>
  );
};

export default FilterItem;
