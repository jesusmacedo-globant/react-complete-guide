import React from 'react';

/**
 * This is a functional or stateless component because it is being created from a function and has no state.
 */
const Person = (props) => {
    // * props.children gives us access to the nested content recieved in the component implementation.
    // * It can include text, complex structure or react components
    // > props.onClick fires the eventListener in the parent component and passes it data (if defined there)
    // > two WAY data binding comes when the recieved value is displayed AND modified in the same element (see input)
    return (
        <div>
            <p onClick={props.onClick}>
                I'm {props.name} and I am {props.age} years old!
            </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.onChange} value={props.name} />
        </div>
    );
};

export default Person;
