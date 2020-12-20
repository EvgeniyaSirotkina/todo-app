import React from 'react';
import Task from './components/Task';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      tasks: [
        { id: 0, title: 'Create ReactJS ToDo App', done: false },
        { id: 1, title: 'Buy gifts for the New Year holidays', done: true }
      ]
    }
  }

  doneTask = id => {
    const index = this.state.tasks.map(task => task.id).indexOf(id);
    this.setState(state => {
      let { tasks } = this.state;
      tasks[index].done = true;

      return tasks;
    });
  }

  deleteTask = id => {
    const index = this.state.tasks.map(task => task.id).indexOf(id);
    this.setState(state => {
      let { tasks } = this.state;
      delete tasks[index];
      
      return tasks;
    });
  }

  render() {
    const { tasks } = this.state;
    const activeTasks = tasks.filter(task => !task.done);
    const doneTasks = tasks.filter(task => task.done);

    return (
      <div className="App">
        <h1 className="top">Active tasks: { activeTasks.length }</h1>
        {[...activeTasks, ...doneTasks].map(task =>
          <Task 
            doneTask={() => this.doneTask(task.id)}
            deleteTask={() => this.deleteTask(task.id)}
            task={task}
            key={task.id}>
          </Task>
        )}
      </div>
    );
  }
}

export default App;