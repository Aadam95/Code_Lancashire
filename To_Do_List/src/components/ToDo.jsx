import React, { useState } from 'react';

const ToDo = ({ addTask }) => {
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (priority < 1 || priority > 5) {
      alert('Priority must be an integer between 1 and 5.');
      return;
    }
    addTask({ task, priority });
    setTask('');
    setPriority(1);
  };

  const priorityClasses = [
    'bg-red-200',
    'bg-orange-200',
    'bg-yellow-200',
    'bg-green-200',
    'bg-purple-200',
  ];

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-6 rounded-lg shadow-md flex flex-col">
      <div className="mb-4">
        <textarea
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
          required
          className="w-full h-32 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-center resize-none placeholder-center"
        />
      </div>
      <div className="mb-4">
        <div className="text-center mb-2 text-gray-700 font-semibold">Assign Priority</div>
        <div className="flex justify-between">
          {priorityClasses.map((bgClass, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setPriority(index + 1)}
              className={`w-10 h-10 rounded-full ${bgClass} flex items-center justify-center focus:outline-none ${priority === index + 1 ? 'ring-2 ring-blue-500' : ''}`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700 transition duration-300"
      >
        Add Task
      </button>
    </form>
  );
};

export default ToDo;
