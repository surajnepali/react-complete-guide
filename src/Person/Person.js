import React from 'react';


const person = () => { //arrow function
    //dynamic content
    return <p>I'm a person and I'm {Math.floor(Math.random() * 30)} years old.</p>

   // return <p>I'm a person and I'm Math.floor(Math.random() * 30) years old.</p>
   // If you write above line of code, it will compiled or interpreted as text.
};

export default person;