import { useEffect, useRef, useState } from 'react';

const TaskForm = ({
  tasks,
  setTasks,
  editingTask,
  onEditTask,
  heading,
  paragraph,
}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Low');
  const [category, setCategory] = useState('Work');

  const titleRef = useRef(null);
  const isEditing = Boolean(editingTask);

  // Sync form when editing
  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDescription(editingTask.description);
      setPriority(editingTask.priority);
      setCategory(editingTask.category);

      requestAnimationFrame(() => {
        titleRef.current?.focus();
      });
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    if (isEditing) {
      onEditTask({
        ...editingTask,
        title,
        description,
        priority,
        category,
      });
    } else {
      setTasks([
        ...tasks,
        {
          id: Date.now(),
          title,
          description,
          priority,
          category,
        },
      ]);
    }

    setTitle('');
    setDescription('');
    setPriority('Low');
    setCategory('Work');
  };

  return (
    <div className='form-container'>
      <img
        src='/src/assets/taskFlow.png'
        alt='TaskFlow Logo'
        className='app-logo'
      />
      <h1>{heading}</h1>
      <p>{paragraph}</p>

      <form onSubmit={handleSubmit}>
        {/* Title */}
        <label htmlFor='title'>Task Title</label>
        <input
          id='title'
          ref={titleRef}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder='Task title'
        />

        {/* Priority */}
        <label htmlFor='priority'>Priority</label>
        <select
          id='priority'
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        {/* Category */}
        <label htmlFor='category'>Category</label>
        <select
          id='category'
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>Work</option>
          <option>School</option>
          <option>Personal</option>
          <option>Meeting</option>
        </select>

        {/* Description */}
        <label htmlFor='description' className='task-description'>
          Description
        </label>
        <textarea
          id='description'
          className='task-description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder='Add task description'
        />

        <button type='submit'>{isEditing ? 'Update Task' : 'Add Task'}</button>
      </form>
    </div>
  );
};

export default TaskForm;
