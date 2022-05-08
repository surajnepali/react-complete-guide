import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Suraj', age: 24 },
      {name: 'Susmita', age: 23 },
      {name: 'Susan', age: 18 }
    ]
  }

  render() {
    return (
      //JSX
      <div className="App">
        <h1>Hi, I'm React App.</h1>
        <p>This is really working!!!</p>
        <button>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Dance</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );

    
    //Children means 'all' that are nested in between this <div></div>
    //creating elements with 4 arguments. 
    //Here, className: 'App' jun chha ni yo chai div in-line class='' wala concept ho haii
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m React App'));
  }
}

export default App; 