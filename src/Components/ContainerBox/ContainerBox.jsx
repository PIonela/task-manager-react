import TaskCard from "../TaskCard/TaskCard";
import NoTasks from "../NoTasks/NoTasks";
import "./ContainerBox.css";
import ControlPanel from "../ControlPanel/ControlPanel";
import { useTaskContext } from "../../context/TaskContext";
import { v4 as uuidv4 } from "uuid";

const ContainerBox = () => {
  const { taskList, setTaskList, selectedStatus } = useTaskContext();

  const onAddTask = (newTask) => {
    setTaskList([
      ...taskList,
      {
        ...newTask,
        id: uuidv4(),
        status: "Todo",
      },
    ]);
  };

  //task = {
  //name: "",
  //dueDate: "",
  //description: "",
  //status: "todo"
  //}

  //scriere filtrare mod1
  const displayTasksByStatus = () => {
    if (selectedStatus === "All Tasks") {
      return taskList;
    }
    let filterList = taskList.filter((task) => task.status === selectedStatus);
    return filterList;
  };
  const list = displayTasksByStatus();

  //scriere filtrare mod2
  const displayTasksList = taskList.filter((task) => {
    if (selectedStatus === "All Tasks") {
      return true; //toate elementele din array au trecut de filtare
    }
    return task.status === selectedStatus; //face ferificare si returneaza un array
  });

  return (
    <div className="container-box">
      <ControlPanel onAddTask={onAddTask} />
      <div className="d-flex">
        {/* randare conditionala */}
        {taskList.length > 0 ? (
          <div className="tasks">
            {displayTasksList.map((task, index) => (
              <TaskCard
                name={task.taskName}
                status={task.status}
                desc={task.taskDescription}
                date={task.taskDate}
                key={index}
                id={task.id}
              />
            ))}
          </div>
        ) : (
          <>
            <NoTasks />
          </>
        )}

        {/* <CreateTaskForm addTask={onAddTask} /> */}
      </div>
    </div>
  );
};

export default ContainerBox;
