import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      //JSX
      <div className="App">
        <h1>Hi, I'm React App.</h1>
        <p>This is really working!!!</p>
        <Person name="Suraj" age="24" />
        <Person name="Susmita" age="18">My Hobbies: Dance</Person>
        <Person name="Susan" age="18" />
      </div>
    );

    
    //Children means 'all' that are nested in between this <div></div>
    //creating elements with 4 arguments. 
    //Here, className: 'App' jun chha ni yo chai div in-line class='' wala concept ho haii
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m React App'));
  }
}

export default App; 