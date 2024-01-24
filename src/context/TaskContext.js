import { createContext, useContext, useState } from "react";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  //const array = [1, 2, 3];
  const data = [
    {
      taskName: "task1",
      taskDescription: "desc1",
      taskDate: "12-12-2024",
      status: "Todo",
    },
    {
      taskName: "task2",
      taskDescription: "desc2",
      taskDate: "12-12-2024",
      status: "Pending",
    },
    {
      taskName: "task3",
      taskDescription: "desc3",
      taskDate: "12-12-2024",
      status: "In Progress",
    },
    {
      taskName: "task4",
      taskDescription: "desc4",
      taskDate: "12-12-2024",
      status: "Completed",
    },
  ];

  const [taskList, setTaskList] = useState(data);
  const [selectedStatus, setSelectedStatus] = useState("All Tasks");
  return (
    <TaskContext.Provider
      value={{ taskList, setTaskList, selectedStatus, setSelectedStatus }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => {
  return useContext(TaskContext);
};
