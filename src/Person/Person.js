import React from 'react';
// * css imports always required because styles are global
import './Person.css';
// * import external librariues
import Radium from 'radium';

/**
 * This is a functional or stateless component because it is being created from a function and has no state.
 */
const Person = (props) => {
    const customStyles = {
        '@media (min-width: 500px)': {
            width: '450px',
        },
    };

    // * props.children gives us access to the nested content recieved in the component implementation.
    // * It can include text, complex structure or react components
    // > props.onClick fires the eventListener in the parent component and passes it data (if defined there)
    // > two WAY data binding comes when the recieved value is displayed AND modified in the same element (see input)
    return (
        <div className="Person" style={customStyles}>
            <p onClick={props.onClick}>
                I'm {props.name} and I am {props.age} years old!
            </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.onChange} value={props.name} />
        </div>
    );
};

// * every component that uses advanced css features, require to be wrapper in Radium()
export default Radium(Person);
