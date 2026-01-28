import { FaTrash } from 'react-icons/fa';
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
                  aria-label='Edit -task'
                  onClick={() => onEditTask(task)}
                  className='edit-btn'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='currentColor'
                    viewBox='0 0 512 512'
                    width='20'
                    height='20'
                  >
                    <path d='M290.74 93.24l128 128L142.6 497.37 14.6 369.37 290.74 93.24zM497.94 74.5c21.2 21.2 21.2 55.63 0 76.84l-46.75 46.75-128-128 46.75-46.75c21.2-21.2 55.63-21.2 76.84 0l51.16 51.16z' />
                  </svg>
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
