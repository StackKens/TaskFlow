import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

const TaskForm = ({ heading, paragraph, tasks, addTasks }) => {
  const [formData, setFormData] = useState({
    title: '',
    priority: 'High',
    category: 'Work',
    description: '',
    status: '',
    dueDate: '',
    createdAt: '',
  });
  const handleFormChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submitForm = (e) => {
    e.preventDefault();

    // validation
    if (!formData.title || !formData.description) return;

    // Create new formData object

    const newFormData = {
      id: Date.now(),
      ...formData,
    };

    // Add  newFormData to state
    addTasks([newFormData, ...tasks]);

    // Reset the form fields

    setFormData({
      title: '',
      priority: 'High',
      category: 'Work',
      description: '',
      status: '',
      dueDate: '',
      createdAt: '',
    });
  };
  return (
    <>
      <div className='app-container'>
        <div className='app-header'>
          <h1>{heading}</h1>
          <p>{paragraph}</p>
        </div>

        <div className='form-container'>
          <form action='' onSubmit={submitForm}>
            <label htmlFor='title'>Title</label>
            <input
              type='text'
              placeholder='Add new task'
              name='title'
              value={formData.title}
              required
              onChange={handleFormChange}
            />

            <div>
              <label htmlFor='priority'>Priority</label>
              <select
                name='priority'
                id='priority'
                value={formData.priority}
                onChange={handleFormChange}
                required
              >
                <option value='High'>High</option>
                <option value='Medium'>Medium</option>
                <option value='Low'>Low</option>
              </select>
            </div>

            <div>
              <label htmlFor='category'>Category</label>
              <select
                name='category'
                id='category'
                value={formData.category}
                onChange={handleFormChange}
                required
              >
                <option value='Work'>Work</option>
                <option value='School'>School</option>
                <option value='Personal'>Personal</option>
                <option value='Meeting'>Meeting</option>
              </select>
            </div>

            <div className='task-description'>
              <label htmlFor='description'>Description</label>
              <textarea
                name='description'
                id='description'
                value={formData.description}
                onChange={handleFormChange}
                required
                placeholder='Add description'
              ></textarea>
            </div>
            <button type='submit' className='add-task-btn'>
              <FaPlus className='btn-icon' />
              <span>Add task</span>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default TaskForm;
