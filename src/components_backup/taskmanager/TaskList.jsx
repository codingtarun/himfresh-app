export const TaskList = ({ taskList, setTaskList, task, setTask }) => {
  function handleDelete(id) {
    const updatedTaskList = taskList.filter((todo) => todo.id !== id);
    setTaskList(updatedTaskList);
  }
  function handleEdit(id) {
    const selectedTask = taskList.find((todo) => todo.id === id);
    setTask(selectedTask);
  }
  return (
    <div className="card">
      <div className="card-body">
        <div className="card-options d-flex justify-content-between align-items-center w-100 mb-3">
          <h4>
            Tasks
            <sup className="rounded bg-secondary text-light px-2 mx-1">
              {taskList.length}
            </sup>
          </h4>
          <button
            className="btn btn-primary btn-sm"
            onClick={() => setTaskList([])}
          >
            Clear All
          </button>
        </div>
        <div className="list-group">
          {taskList.map((todo) => (
            <div
              key={todo.id}
              className="mb-3 p-3 shadow-sm border-primary border-start border-3"
            >
              <div className="d-flex w-100 justify-content-between align-items-center mb-1">
                <h5>{todo.title}</h5>
                <div className="btn-group">
                  <button
                    className="btn btn-outline-secondary btn-sm"
                    onClick={() => handleEdit(todo.id)}
                  >
                    <i className="fa-regular fa-pen-to-square"></i>
                  </button>
                  <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => handleDelete(todo.id)}
                  >
                    <i className="fa-regular fa-trash-can"></i>
                  </button>
                </div>
              </div>
              <small> {todo.dueDate} </small>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
