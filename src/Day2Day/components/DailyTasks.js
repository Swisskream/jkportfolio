import { Link } from 'react-router-dom';
import React, {useState} from 'react';
import '../assets/DailyTasks.css';

function DailyTasks() {
    const [taskInput, setTaskInput] = useState('');
    const [deadlineInput, setDeadlineInput] = useState('');
    const [highPriorityTasks, setHighPriorityTasks] = useState([]);
    const [lowPriorityTasks, setLowPriorityTasks] = useState([]);
  
    const today = new Date();
  
    const addTask = () => {
      const newTask = {
        description: taskInput,
        deadline: deadlineInput,
        done: false,
      };
  
      const taskDeadline = new Date(deadlineInput);
  
      if (taskDeadline.getTime() <= today.getTime()) {
        setHighPriorityTasks([...highPriorityTasks, newTask]);
      } else {
        setLowPriorityTasks([...lowPriorityTasks, newTask]);
      }

      setTaskInput('');
      setDeadlineInput('');
    };
  
    const toggleTaskDone = (index, priority) => {
      const updateTasks = (tasks) => {
        const updatedTasks = tasks.map((task, i) => 
          i === index ? { ...task, done: !task.done } : task
        );
        return updatedTasks;
      };
  
      if (priority === 'high') {
        setHighPriorityTasks(updateTasks(highPriorityTasks));
      } else {
        setLowPriorityTasks(updateTasks(lowPriorityTasks));
      }
    };
  
    const deleteTask = (index, priority) => {
      const removeTask = (tasks) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        return updatedTasks;
      };
  
      if (priority === 'high') {
        setHighPriorityTasks(removeTask(highPriorityTasks));
      } else {
        setLowPriorityTasks(removeTask(lowPriorityTasks));
      }
    };
  
    const createTaskElement = (task, index, priority) => (
      <div className={`todo-item ${priority}-priority`} key={index}>
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => toggleTaskDone(index, priority)}
        />
        <label style={{ textDecoration: task.done ? 'line-through' : 'none' }}>
          {task.description} (Deadline: {task.deadline})
        </label>
        <button id='delete_task' onClick={() => deleteTask(index, priority)}>Delete Task</button>
      </div>
    );
  
    return (
      <div className='dailyTasksPage'>
        <header>
          <button aria-label='On Click' id='home'>
            <Link to='/'>Home</Link>
          </button>
          <h1 id='DailyTasks'>Daily Tasks</h1>
        </header>
        <main>
          <h2>To-do List</h2>
          <div className='input-container'>
            <input
              type='text'
              value={taskInput}
              onChange={(e) => setTaskInput(e.target.value)}
              placeholder='Enter task...'
            />
            <input
              type='date'
              value={deadlineInput}
              onChange={(e) => setDeadlineInput(e.target.value)}
            />
            <button onClick={addTask}>Add</button>
          </div>

          <div id='todoList'>
            <h3>High Priority Tasks:</h3>
            <div id='highPriorityContainer'>
              {highPriorityTasks.map((task, index) => createTaskElement(task, index, 'high'))}
            </div>
  
            <h3>Low Priority Tasks:</h3>
            <div id='lowPriorityContainer'>
              {lowPriorityTasks.map((task, index) => createTaskElement(task, index, 'low'))}
            </div>
          </div>
        </main>
      </div>
    );
  }
  
  export default DailyTasks;