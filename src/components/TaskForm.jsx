import { useState } from 'react';

const TaskForm = ({ heading, paragraph }) => {
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

    console.log(formData);
  };
  return (
    <>
      <div>
        <h1>{heading}</h1>
        <p>{paragraph}</p>
      </div>

      <div className='form-container'>
        <form action=''>
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
            ></textarea>
          </div>
        </form>
      </div>
    </>
  );
};

export default TaskForm;
