import React from 'react';

/**
 * This is a functional or stateless component because it is being created from a function and has no state.
 */
const Person = (props) => {
    // * props.children gives us access to the nested content recieved in the component implementation.
    // * It can include text, complex structure or react components
    return (
        <div>
            <p>
                I'm {props.name} and I am {props.age} years old!
            </p>
            <p>{props.children}</p>
        </div>
    );
};

export default Person;
