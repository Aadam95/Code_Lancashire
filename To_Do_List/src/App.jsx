import React, { useState } from 'react';
import ToDo from './components/ToDo';
import TaskList from './components/TaskList';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, { ...newTask, completed: false }]);
  };

  const toggleTaskCompletion = (index) => {
    const newTasks = tasks.map((task, i) => {
      if (i === index) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(newTasks);
  };

  const removeCompletedTasks = () => {
    const newTasks = tasks.filter(task => !task.completed);
    setTasks(newTasks);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-300 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center">To Do List</h1>
        <div className="space-y-4">
          <ToDo addTask={addTask} />
          <TaskList tasks={tasks} toggleTaskCompletion={toggleTaskCompletion} removeCompletedTasks={removeCompletedTasks} />
        </div>
      </div>
    </div>
  );
};

export default App;
