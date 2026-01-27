import { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const App = () => {
  // Function to delete the task
  const deleteTasks = (id) => {
    const confirmDelete = window.confirm(
      'Are you sure yo want to delete this task?',
    );

    if (confirmDelete) {
      setTasks(tasks.filter((task) => task.id !== id));
    }
  };
  const [tasks, setTasks] = useState([]);
  return (
    <div>
      <TaskForm
        tasks={tasks}
        setTasks={setTasks}
        heading='TaskFlow'
        paragraph='Manage tasks, priorities, and deadlines in one place'
      />
      <TaskList deleteTasks={deleteTasks} tasks={tasks} />
    </div>
  );
};

export default App;
