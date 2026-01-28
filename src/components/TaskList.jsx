import { FaTrash, FaEdit } from 'react-icons/fa';

const TaskList = ({ tasks, deleteTasks }) => {
  if (!tasks || tasks.length === 0) {
    return <p className='empty-state'>No tasks to show. Please add a task.</p>;
  }

  return (
    <>
      <p className='task-list-heading'>Recent tasks</p>
      <section className='task-list'>
        {tasks.map(({ id, title, description, priority, category }) => (
          <div key={id} className='task-card'>
            <div className='task-card-header'>
              <h3 className='task-title'>{title}</h3>
              <div className='task-actions'>
                <button className='edit-btn' aria-label='Edit task'>
                  <FaEdit />
                </button>

                <button
                  className='delete-btn'
                  aria-label='Delete task'
                  onClick={() => deleteTasks(id)}
                >
                  <FaTrash />
                </button>
              </div>
            </div>
            <p className='task-description'>{description}</p>
            <div className='task-meta'>
              <span className={`priority ${priority.toLowerCase()}`}>
                {priority}
              </span>
              <span className='category'>{category}</span>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default TaskList;
