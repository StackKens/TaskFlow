const TaskList = ({ tasks }) => {
  if (tasks.length === 0) return <p>No tasks to show! Please add Tasks</p>;
  return (
    <div>
      {tasks.map((task) => (
        <span key={task.id}>{task.title}</span>
      ))}
    </div>
  );
};

export default TaskList;
