import { useState } from 'react';
import TaskList from './components/TaskList';
import TaskFormEditMode from './components/TaskFormEditMode';

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

  // Function to edit the task
  const editTask = (updatedTask) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === updatedTask.id ? updatedTask : task)),
    );
    setEditingTask(null);
  };

  const handleEditClick = (task) => {
    setEditingTask(task);
  };

  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  return (
    <div>
      <TaskForm
        tasks={tasks}
        setTasks={setTasks}
        editingTask={editingTask}
        onEditTask={editTask}
        heading='TaskFlow'
        paragraph='Manage tasks, priorities, and deadlines in one place'
      />

      <TaskList
        tasks={tasks}
        deleteTasks={deleteTasks}
        onEditTask={handleEditClick}
      />
    </div>
  );
};

export default App;
