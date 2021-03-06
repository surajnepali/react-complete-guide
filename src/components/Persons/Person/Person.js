import React from 'react';
// import Radium from 'radium';
import classes from './Person.css';

const person = (props) => { //arrow function

    // const style ={
    //     '@media (min-width: 500px)': {
    //         width: '450px'
    //     }
    // }

    //dynamic content
    //return <p>I'm a person and I'm {Math.floor(Math.random() * 30)} years old.</p>


    return (
        // <div className="Person" style={style}>
        <div className={classes.Person}>
            <p onClick={props.click}>I'm {props.name} and I'm {props.age} years old!</p>
            <p>{props.children}</p>   
            <input type="text" onChange={props.changed} value={props.name}></input>    
        </div>
        
    );

   // return <p>I'm a person and I'm Math.floor(Math.random() * 30) years old.</p>
   // If you write above line of code, it will compiled or interpreted as text.

   
};

export default person;