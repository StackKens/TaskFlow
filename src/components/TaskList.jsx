const TaskList = ({ tasks }) => {
  if (!tasks || tasks.length === 0) {
    return <p>No tasks to show. Please add a task.</p>;
  }

  return (
    <section className='task-list'>
      {tasks.map(({ id, title, description, priority, category }) => (
        <div key={id} className='task-card'>
          <h3 className='task-title'>{title}</h3>

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
  );
};

export default TaskList;
