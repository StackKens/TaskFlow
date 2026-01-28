import { FaEdit, FaTrash } from 'react-icons/fa';
const TaskList = ({ tasks, deleteTasks, onEditTask }) => {
  if (!tasks || tasks.length === 0) {
    return <p className='empty-state'>No tasks to show. Please add a task.</p>;
  }

  return (
    <>
      <p className='task-list-heading'>Recent tasks</p>
      <section className='task-list'>
        {tasks.map((task) => (
          <div key={task.id} className='task-card'>
            <div className='task-card-header'>
              <h3 className='task-title'>{task.title}</h3>
              <div className='task-actions'>
                <button
                  onClick={() => onEditTask(task)}
                  className='edit-btn'
                  aria-label='Edit task'
                >
                  <FaEdit />
                </button>

                <button
                  className='delete-btn'
                  aria-label='Delete task'
                  onClick={() => deleteTasks(task.id)}
                >
                  <FaTrash />
                </button>
              </div>
            </div>
            <p className='task-description'>{task.description}</p>
            <div className='task-meta'>
              <span className={`priority ${task.priority.toLowerCase()}`}>
                {task.priority}
              </span>
              <span className='category'>{task.category}</span>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default TaskList;
