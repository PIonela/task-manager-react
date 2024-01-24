//import { createContext } from "react";
import "./App.css";
import ContainerBox from "./Components/ContainerBox/ContainerBox";
import { TaskProvider } from "./context/TaskContext";

//export const TaskManagerContext = createContext();

function App() {
  // const name = "Ionela";
  // const array = [1, 2, 3];
  return (
    //<TaskManagerContext.Provider value={{ array, name }}>
    <TaskProvider>
      <div className="App">
        <ContainerBox />
      </div>
    </TaskProvider>
    //</TaskManagerContext.Provider>
  );
}

export default App;
