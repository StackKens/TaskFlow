import { useState } from 'react';
import TaskForm from './components/TaskForm';

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
    </div>
  );
};

export default App;
