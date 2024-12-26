export const AddTask = ({ taskList, setTaskList, task, setTask }) => {
  function handleSubmit(e) {
    e.preventDefault();
    const date = new Date();
    if (task.id) {
      const updateTask = {
        id: task.id,
        title: e.target.addTask.value,
        dueDate: task.dueDate,
      };

      const updatedTaskList = taskList.map((todo) =>
        todo.id === task.id ? updateTask : todo
      );
      setTaskList(updatedTaskList);
      setTask({});
    } else {
      const newTask = {
        id: date.getTime(),
        title: e.target.addTask.value,
        dueDate: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
      };
      setTaskList([...taskList, newTask]);
      setTask({});
    }
  }
  return (
    <div class="card mb-3">
      <div className="card-body">
        <form onSubmit={handleSubmit} action="#">
          <div className="input-group">
            <input
              type="text"
              name="addTask"
              id="add-task"
              className="form-control"
              placeholder="Add task"
              aria-label="Add task"
              aria-describedby="add-task"
              autoComplete="off"
              required
              value={task.title || ""}
              onChange={(e) => {
                setTask({ ...task, title: e.target.value });
              }}
            />
            <button
              className="btn btn-outline-secondary"
              type="submit"
              id="add-task"
            >
              {task.id ? "Update" : "Add"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
