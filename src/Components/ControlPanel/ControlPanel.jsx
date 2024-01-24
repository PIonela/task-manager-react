import React, { useState } from "react";
import Button from "../Button/Button";
import CreateTaskForm from "../CreateTaskForm/CreateTaskForm";
import Modal from "../Modal/Modal";
import TaskFilter from "../TaskFilter/TaskFilter";
import "../ControlPanel/ControlPanel.css";

function ControlPanel(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  const handleAddTask = (task) => {
    props.onAddTask(task);
    closeModal();
  };

  return (
    <>
      <div className="control-panel d-flex">
        <div className="left">
          <h1>Tasks</h1>
          <h4>Your tasks in your space.</h4>
          <TaskFilter />
        </div>
        <Button
          textBtn="Create task"
          onClickFunction={openModal}
          //isValid={true}
        />
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <CreateTaskForm addTask={handleAddTask} />
      </Modal>
    </>
  );
}

export default ControlPanel;
