// We can use classes to create components, and we have to for handling the state, however
// most of the time we should use a JS function, because at its simplest form, a component
// is just a function that returns some JSX.

// There's two ways to style components:
// 
import React from 'react';
import './Person/Person.css'; // file extension must be included... file extensions can only be omitted for JS files


const person = (props) => { 
    return (
    <div className="Person">

        <p onClick={props.click}>My name is {props.name} and I am {props.age} years old!</p>
        {/* Children are a special property given to us by react which is the text in between the <> </> tags that are passed into this component */}
       <p> {props.children}</p> 
       <input type="text" onChange={props.changed} value={props.name}/> {/*two way binding*/}
       {/*onChange will be fired whenever the value of the input changes*/}
        </div>
    )
}

export default person;