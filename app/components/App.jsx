import uuid from 'node-uuid';
import React from 'react';
import Notes from './Notes.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [
        {
          id: uuid.v4(),
          task: 'Task A'
        },
        {
          id: uuid.v4(),
          task: 'Task B'
        },
        {
          id: uuid.v4(),
          task: 'Task C'
        }
      ]
    };
  }

  render() {
    const notes = this.state.notes;

    return (
      <div>
        <Notes items={notes} />
      </div>
    );
  }
}

