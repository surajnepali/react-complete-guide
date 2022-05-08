import React from 'react';


const person = (props) => { //arrow function
    //dynamic content
    //return <p>I'm a person and I'm {Math.floor(Math.random() * 30)} years old.</p>
    return <p>I'm {props.name} and I'm {props.age} years old!</p>

   // return <p>I'm a person and I'm Math.floor(Math.random() * 30) years old.</p>
   // If you write above line of code, it will compiled or interpreted as text.

   
};

export default person;