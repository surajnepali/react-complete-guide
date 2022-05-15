import React, { Component } from 'react';
import classes from './App.css';
// import Radium, { StyleRoot } from 'radium';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      {id: 'lklw1', name: 'Suraj', age: 24 },
      {id: 'dlkl3',name: 'Susmita', age: 23 },
      {id: 'najsb1', name: 'Susan', age: 18 }
    ],
    otherState: 'sone other value',
    showPersons: false
  }

  // The 'switchEventHandler' method is removed from 4.6 of course.

  // switchEventHandler = (newName) => {
  //   // console.log('Was Clicked!!');
  //   //DON'T DO THIS: this.state.person[0].name = 'Asmita';
  //   this.setState ( {
  //     persons: [
  //       {name: newName, age: 22 },
  //       {name: 'Susmita', age: 23 },
  //       {name: 'Susan', age: 19 }
  //     ]
  //   }) 
  // }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // alternative approach for above object of code
    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});

    // above line of code instead of using below 6lines of code

    // this.setState( {
    //   persons: [
    //     { name: 'Suraj', age: 24 },
    //     { name: event.target.value, age: 23 },
    //     { name: 'Susan', age: 18 }
    //   ]
    // } )
  }

  deletePersonHandler = (personIndex) => {
    //Wondering ?? how can I edit a constant.
    /*
      For that, keep in mind that arrays and objects are reference types so, I didn't assign 
      a new value to the constant, it is only holding the pointer. I only change the element 
      it was pointing to.    (G Javascript K)
    */ 
    // const persons   = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons: persons})
  }  

  togglePersonsHandler =() => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }


  render() {

    // commented for adding pseudo selectors

    // const style={ //since it is javascript, the values should be written in ''.
    //   backgroundColor: 'green',
    //   color: 'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer'
    //   // ':hover': {
    //   //   backgroundColor: 'lightgreen',
    //   //   color: 'black'
    //   // }
    // };

    let persons = null;
    // let btnClass = '';

    if(this.state.showPersons) {
      persons = <Persons 
              persons = {this.state.persons}
              clicked = {this.deletePersonHandler}
              changed = {this.nameChangedHandler}/>;
          // {/* map() function is the one that converts an array into the one we want
          //     according to our will and our instructions. */}
          // {/* {this.state.persons.map((person, index) => {
          //   return <Person
          //       click= {() => this.deletePersonHandler(index)}  
          //       name= {person.name}
          //       age= {person.age}
          //       key= {person.id} // commented to examine the error-boundaries working
          //       changed= {(event) => this.nameChangedHandler(event, person.id)} />
          // })} */}
          // {/* <Person 
          //   name={this.state.persons[0].name} 
          // age={this.state.persons[0].age} />
          // <Person 
          //   name={this.state.persons[1].name} 
          //   age={this.state.persons[1].age}
          //   click={this.switchEventHandler.bind(this, 'Kanchhu')}
          //   changed={this.nameChangedHandler} >My Hobbies: Dance</Person>
          // <Person 
          //   name={this.state.persons[2].name} 
          //   age={this.state.persons[2].age} /> */}
        
      // btnClass = classes.Red; // button class always needs to be a string  if we assign it to
            // class name and classes Red in the end is just a string created by the css loader
            // which gives us still access to the class like this
            // But in the end returns a string with the valid css or it is an empty string if 
            // we're outside of this 'if' condition 


      // style.backgroundColor = 'red'; // commented for adding pseudo selectors
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
    }

    // let assignedClasses = [];
    // if(this.state.persons.length <= 2){
    //   assignedClasses.push(classes.red) //classes = ['red']
    // }
    // if(this.state.persons.length <= 1){
    //   assignedClasses.push(classes.bold) //classes = ['red', 'bold']
    // }

    return (
      //JSX
      <div className={classes.App}>
        {/* <h1>Hi, I'm React App.</h1>
        <p className={assignedClasses.join(' ')}>This is really working!!!</p>
        <button 
          className={btnClass}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>  */}
          {/* conditions cannot be applied here. */}
        {/* {this.state.showPersons ===true ?   
          <div>
            <Person 
              name={this.state.persons[0].name} 
              age={this.state.persons[0].age} />
            <Person 
              name={this.state.persons[1].name} 
              age={this.state.persons[1].age}
              click={this.switchEventHandler.bind(this, 'Kanchhu')}
              changed={this.nameChangedHandler} >My Hobbies: Dance</Person>
            <Person 
              name={this.state.persons[2].name} 
              age={this.state.persons[2].age} />
          </div> : null
        } */}
        <Cockpit 
          showPersons = {this.state.showPersons}
          persons = {this.state.persons} 
          clicked = {this.togglePersonsHandler}/>
        {persons}
      </div>
    );

    
    //Children means 'all' that are nested in between this <div></div>
    //creating elements with 4 arguments. 
    //Here, className: 'App' jun chha ni yo chai div in-line class='' wala concept ho haii
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m React App'));
  }
}

// const app = (props) => {
//   const [personsState, setPersonsState] = useState({
//     persons: [
//       {name: 'Suraj', age: 24 },
//       {name: 'Susmita', age: 23 },
//       {name: 'Susan', age: 18 }
//     ]
//   }); 

//   const [otherState, setOtherState] = useState ('some other values'); 

//   console.log(personsState,otherState);

//   const switchEventHandler = () => {
//     //whenever we switch 'personsState' to 'setPersonsSate' it replaces all the values. So,
//     //we have to make sure that all our old data are included with our new values. 
//     setPersonsState ({
//       persons: [
//         {name: 'Asmita', age: 22 },
//         {name: 'Susmita', age: 23 },
//         {name: 'Susan', age: 19 }
//       ]
//     });
//   };

     
//   return (
//     //JSX
//     <div className="App">
//       <h1>Hi, I'm React App.</h1>
//       <p>This is really working!!!</p>
//       <button onClick={switchEventHandler}>Switch Name</button> 
//       <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
//       <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies: Dance</Person>
//       <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
//     </div>
//   );
  
// }

export default App; 