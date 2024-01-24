import { useState, useEffect } from "react";
import "./CreateTaskForm.css";
import Button from "../Button/Button";

const CreateTaskForm = (props) => {
  // const [taskName, setTaskName] = useState("");
  // const [taskDate, setTaskDate] = useState("");
  // const [taskDescription, setTaskDescription] = useState("");

  const [taskData, setTaskData] = useState({
    taskName: "",
    taskDate: "",
    taskDescription: "",
  });

  const [formErrors, setFormError] = useState({
    nameError: "",
    dateError: "",
    descriptionError: "",
    isValid: true,
  });

  // useEffect(() => {
  //   if (taskData.taskName.length === 0) {
  //     setFormError((prevState) => ({
  //       ...prevState,
  //       nameError: "This field is required!",
  //       isValid: false,
  //     }));
  //   } else {
  //     setFormError((prevState) => ({
  //       ...prevState,
  //       nameError: "",
  //       isValid: true,
  //     }));
  //   }
  // }, [taskData.taskName]);

  // useEffect(() => {
  //   if (taskData.taskDate.length === 0) {
  //     setFormError((prevState) => ({
  //       ...prevState,
  //       dateError: "This field is required!",
  //       isValid: false,
  //     }));
  //   } else {
  //     setFormError((prevState) => ({
  //       ...prevState,
  //       dateError: "",
  //       isValid: true,
  //     }));
  //   }
  // }, [taskData.taskDate]);

  // useEffect(() => {
  //   if (taskData.taskDescription.length === 0) {
  //     setFormError((prevState) => ({
  //       ...prevState,
  //       descriptionError: "This field is required!",
  //       isValid: false,
  //     }));
  //   } else {
  //     setFormError((prevState) => ({
  //       ...prevState,
  //       descriptionError: "",
  //       isValid: true,
  //     }));
  //   }
  // }, [taskData.taskDescription]);

  useEffect(() => {
    let nameErrorMessage = "";
    let dateErrorMessage = "";
    let descriptionErrorMessage = "";
    let isFormValid = true;

    if (taskData.taskName.length === 0) {
      nameErrorMessage = "This field is required!";
      isFormValid = false;
    }

    if (taskData.taskDate.length === 0) {
      dateErrorMessage = "This field is required!";
      isFormValid = false;
    } else if (new Date(taskData.taskDate).setHours(0, 0, 0, 0) < new Date()) {
      dateErrorMessage = "The date should not be in the past";
      isFormValid = false;
      console.log(new Date(taskData.taskDate).setHours(0, 0, 0, 0), new Date());
    }

    if (taskData.taskDescription.length === 0) {
      descriptionErrorMessage = "This field is required!";
      isFormValid = false;
    } else if (
      taskData.taskDescription.length < 4 ||
      taskData.taskDescription.length > 20
    ) {
      //min 4, max 20
      descriptionErrorMessage =
        "This field should have between 4 and 20 characters";
      isFormValid = false;
    }

    setFormError({
      nameError: nameErrorMessage,
      dateError: dateErrorMessage,
      descriptionError: descriptionErrorMessage,
      isValid: isFormValid,
    });
  }, [taskData.taskName, taskData.taskDate, taskData.taskDescription]);

  // const handleTaskName = (event) => {
  //   setTaskName(event.target.value);
  // };

  // const handleTaskDate = (event) => {
  //   setTaskDate(event.target.value);
  // };

  // const handleTaskDescription = (event) => {
  //   setTaskDescription(event.target.value);
  // };

  // const resetState = () => {
  //   setTaskName("");
  //   setTaskDate("");
  //   setTaskDescription("");
  // };

  const handleTaskName = (event) => {
    setTaskData((prevState) => {
      return { ...prevState, taskName: event.target.value }; //returneaza noul obiect
    });
  };

  //{
  //   taskName: "task1",
  //   taskDate: "21/12/2012",
  //   taskDescription: "",
  // }

  const handleTaskDate = (event) => {
    setTaskData((prevState) => {
      return { ...prevState, taskDate: event.target.value }; //returneaza noul obiect
    });
  };

  const handleTaskDescription = (event) => {
    setTaskData((prevState) => {
      return { ...prevState, taskDescription: event.target.value }; //returneaza noul obiect
    });
  };

  const handleSubmitForm = (event) => {
    event.preventDefault(); //nu o sa se mai reincarce pagina la submit
    console.log("Submit");

    // props.addTask({
    //   name: taskName,
    //   dueDate: taskDate,
    //   description: taskDescription,
    // });

    props.addTask(taskData);

    // resetState();ne este nevoie neaparat sa le scriem separta intr-o functie

    //sau

    //   setTaskName("");
    //   setTaskDate("");
    //   setTaskDescription("");

    setTaskData({
      taskName: "",
      taskDate: "",
      taskDescription: "",
    });
  };

  return (
    <div className="create-task-form">
      <h2>Create task</h2>
      <form onSubmit={handleSubmitForm}>
        <label htmlFor="taskName">Task name</label>
        <input
          type="text"
          id="taskName"
          value={taskData.taskName}
          onChange={handleTaskName}
          //className={formErrors.nameError ? "input-error" : ""}
          className={formErrors.nameError && "input-error"}
          //required
        />
        <p className="error-message">{formErrors.nameError}</p>

        <label htmlFor="taskDate">Due date</label>
        <input
          type="date"
          id="taskDate"
          value={taskData.taskDate}
          onChange={handleTaskDate}
          className={formErrors.dateError && "input-error"}
        />
        <p className="error-message">{formErrors.dateError}</p>

        <label htmlFor="taskDesc">Task description</label>
        <textarea
          id="taskDesc"
          value={taskData.taskDescription}
          onChange={handleTaskDescription}
          className={formErrors.descriptionError && "input-error"}
        ></textarea>
        <p className="error-message">{formErrors.descriptionError}</p>
        <Button
          textBtn="Create task"
          type="submit"
          isValid={formErrors.isValid}
        />
      </form>
    </div>
  );
};

export default CreateTaskForm;
