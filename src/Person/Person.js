import React from 'react';
import Radium from 'radium';
import './Person.css';

const person = (props) => { //arrow function
    //dynamic content
    //return <p>I'm a person and I'm {Math.floor(Math.random() * 30)} years old.</p>
    return (
        <div className="Person">
            <p onClick={props.click}>I'm {props.name} and I'm {props.age} years old!</p>
            <p>{props.children}</p>   
            <input type="text" onChange={props.changed} value={props.name}></input>    
        </div>
        
    );

   // return <p>I'm a person and I'm Math.floor(Math.random() * 30) years old.</p>
   // If you write above line of code, it will compiled or interpreted as text.

   
};

export default Radium(person);