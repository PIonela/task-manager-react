import noTasks from "../../assets/no-tasks.png";

function NoTasks() {
  return (
    <div className="no-tasks">
      {/* imagine din src */}
      <img src={noTasks} alt="tasksImage" />
      {/* imagine din public */}
      {/* <img src="/images/no-tasks.png" alt="" />  */}
      <h3>No Tasks Yet</h3>
      <p>You have no task created in your workspace yet.</p>
      <p>Get productive. Create a Task Now.</p>
    </div>
  );
}
//rfc sau rfce
export default NoTasks;
