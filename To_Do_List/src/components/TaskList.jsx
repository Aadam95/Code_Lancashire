import React from 'react';

const TaskList = ({ tasks, toggleTaskCompletion, removeCompletedTasks }) => {
  const getPriorityClass = (priority) => {
    switch (priority) {
      case 1:
        return 'bg-red-100';
      case 2:
        return 'bg-orange-100';
      case 3:
        return 'bg-yellow-100';
      case 4:
        return 'bg-green-100';
      case 5:
        return 'bg-blue-100';
      default:
        return 'bg-gray-100';
    }
  };

  return (
    <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md flex flex-col space-y-2">
      <ul className="flex-grow space-y-2">
        {tasks
          .sort((a, b) => a.priority - b.priority)
          .map((task, index) => (
            <li
              key={index}
              className={`flex justify-between items-center p-2 border border-gray-300 rounded ${getPriorityClass(task.priority)}`}
            >
              <span className="text-gray-800">{task.task}</span>
              <span className="text-sm font-semibold text-gray-600">Priority: {task.priority}</span>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTaskCompletion(index)}
                className="ml-2"
              />
            </li>
          ))}
      </ul>
      <button
        onClick={removeCompletedTasks}
        className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-700 transition duration-300"
      >
        Remove Completed Tasks
      </button>
    </div>
  );
};

export default TaskList;
