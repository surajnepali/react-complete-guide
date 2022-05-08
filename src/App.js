import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

// class App extends Component {
//   state = {
//     persons: [
//       {name: 'Suraj', age: 24 },
//       {name: 'Susmita', age: 23 },
//       {name: 'Susan', age: 18 }
//     ],
//     otherState: 'sone other value'
//   }

//   switchEventHandler = () => {
//     // console.log('Was Clicked!!');
//     //DON'T DO THIS: this.state.person[0].name = 'Asmita'
//     this.setState ( {
//       persons: [
//         {name: 'Asmita', age: 22 },
//         {name: 'Susmita', age: 23 },
//         {name: 'Susan', age: 19 }
//       ]
//     }) 
//   }

//   render() {
//     return (
//       //JSX
//       <div className="App">
//         <h1>Hi, I'm React App.</h1>
//         <p>This is really working!!!</p>
//         <button onClick={this.switchEventHandler}>Switch Name</button> 
//         <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
//         <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Dance</Person>
//         <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
//       </div>
//     );

    
//     //Children means 'all' that are nested in between this <div></div>
//     //creating elements with 4 arguments. 
//     //Here, className: 'App' jun chha ni yo chai div in-line class='' wala concept ho haii
//     // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m React App'));
//   }
// }

const app = (props) => {
  const [personsState, setPersonsState] = useState({
    persons: [
      {name: 'Suraj', age: 24 },
      {name: 'Susmita', age: 23 },
      {name: 'Susan', age: 18 }
    ]
  }); 

  const [otherState, setOtherState] = useState ('some other values'); 

  console.log(personsState,otherState);

  const switchEventHandler = () => {
    //whenever we switch 'personsState' to 'setPersonsSate' it replaces all the values. So,
    //we have to make sure that all our old data are included with our new values. 
    setPersonsState ({
      persons: [
        {name: 'Asmita', age: 22 },
        {name: 'Susmita', age: 23 },
        {name: 'Susan', age: 19 }
      ]
    });
  };

     
  return (
    //JSX
    <div className="App">
      <h1>Hi, I'm React App.</h1>
      <p>This is really working!!!</p>
      <button onClick={switchEventHandler}>Switch Name</button> 
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies: Dance</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
    </div>
  );
  
}

export default app; 