import React, { useState } from 'react';

function TaskApp() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [notes, setNotes] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { task: newTask, notes: notes, completed: false }]);
      setNewTask('');
      setNotes('');
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const handleTaskCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = true;
    setTasks(updatedTasks);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
    <div className="bg-zinc-900 min-h-screen flex flex-col justify-center items-center px-4">
      <h1 className="text-3xl mb-4 font-semibold text-white">Task Manager</h1>
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-xl">
      <div className="flex justify-between mb-4">
  <input
    type="text"
    placeholder="Enter task"
    className="border border-gray-300 m-1 rounded-r px-4 py-2 w-full"
    value={newTask}
    onChange={(e) => setNewTask(e.target.value)}
    onKeyPress={handleKeyPress}
  />
  <input
    type="text"
    placeholder="Enter Notes/Price"
    className="border border-gray-300 m-1 rounded-r px-4 py-2 w-full"
    value={notes}
    onChange={(e) => setNotes(e.target.value)}
    onKeyPress={handleKeyPress}
  />
  <button
    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
    onClick={handleAddTask}
  >
    Add Task
  </button>
</div>

        <table className="w-full">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Task</th>
              <th className="border border-gray-300 px-4 py-2">Notes</th>
              <th className="border border-gray-300 px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={index}>
                <td className="border border-gray-300 px-4 py-2">{task.task}</td>
                <td className="border border-gray-300 px-4 py-2">{task.notes}</td>
                <td className="border border-gray-300 px-4 py-2">
                  {!task.completed && (
                    <button
                      className="bg-green-500 hover:bg-green-600 text-white font-semibold py-1 px-2 rounded mr-2"
                      onClick={() => handleTaskCompletion(index)}
                    >
                      Done
                    </button>
                  )}
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-2 rounded"
                    onClick={() => handleDeleteTask(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TaskApp;
