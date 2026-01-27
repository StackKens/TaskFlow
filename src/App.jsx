import { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const App = () => {
  const [tasks, addTasks] = useState([]);
  return (
    <div>
      <TaskForm
        tasks={tasks}
        addTasks={addTasks}
        heading='TaskFlow'
        paragraph='Manage tasks, priorities, and deadlines in one place'
      />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default App;
