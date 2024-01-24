import FilterItem from "../FilterItem/FilterItem";
import { useTaskContext } from "../../context/TaskContext";

const TaskFilter = () => {
  const filterTitles = [
    "All Tasks",
    "Todo",
    "Pending",
    "In Progress",
    "Completed",
  ];

  const { taskList, selectedStatus, setSelectedStatus } = useTaskContext();

  const getCountFilter = (status) => {
    if (status === "All Tasks") {
      return taskList.length;
    }
    let filterList = taskList.filter((task) => task.status === status);
    return filterList.length;
  };

  console.log(selectedStatus);

  return (
    <div className="task-filter d-flex">
      {filterTitles.map((title) => (
        <FilterItem
          status={title}
          count={getCountFilter(title)}
          selectStatus={() => setSelectedStatus(title)}
          active={selectedStatus === title}
        />
      ))}
    </div>
  );
};

export default TaskFilter;
