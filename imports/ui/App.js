import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
 
import { Tasks } from '../api/tasks.js'; 
import Task from './Task.js';
 
// App component - represents the whole app
export default class App extends Component {
  getTasks() {
    return [
	// Don't forget that undescore means it's a private property
      { _id: 1, text: 'This is task 1' },
      { _id: 2, text: 'This is task 2' },
      { _id: 3, text: 'This is task 3' },
    ];
  }
 
  renderTasks() {
    return this.getTasks().map((task) => (
      <Task key={task._id} task={task} />
    ));
  }
 
  render() {
    return (
      <div className="container">
        <header>
          <h1>Todo List</h1>
        </header>
 
        <ul>
          {this.renderTasks()}
        </ul>
      </div>
    );
  }

}

export default withTracker(() => {
  return {
    tasks: Tasks.find({}).fetch(),
  };
})(App);


