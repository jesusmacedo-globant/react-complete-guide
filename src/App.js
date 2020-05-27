import React, { useState } from 'react';
// * this is how css is imported
import './App.css';
// * import custom components
import Person from './Person/Person';

/**
 * This is a class-based or stateful component because it is being created as a class and could have a state.
 */
const App = () => {
    // * useState always returns: current state object, function that allows us to manipulate THIS state (setState)
    // > in this way we can create a variable for each return object and handle them separately
    const [componentState, setComponentState] = useState({
        persons: [
            {
                name: 'Jesus',
                age: 19,
            },
            {
                name: 'Luisa',
                age: 26,
            },
            {
                name: 'Pablo',
                age: 15,
            },
        ],
        otherProperty: 'yes',
    });

    /**
     * * here we are creating a new object inside the state and assigning it a value. It will still exist even if it's
     * * not included inside setComponentState because it was added separately (but otherProperty will dissapear if not
     * * included).
     * ! here we are only recieving its state BUT we could also recieve its setState function if required
     */
    const [evenAnotherProperty] = useState(true);
    // const [evenAnotherProperty, setEvenAnotherPropertyState] = useState(true);

    console.info(componentState, evenAnotherProperty);

    /**
     * > Basically we create clousures by defining functions inside functions here.
     * Event listening for click event in button. All available events are here:
     * https://reactjs.org/docs/events.html#supported-events
     */
    const switchNameHandler = () => {
        // ! this function does NOT merge the object as in class-based components, it REPLACES the whole state
        setComponentState({
            persons: [
                {
                    name: 'Jesus',
                    age: 29,
                },
                {
                    name: 'Luisa',
                    age: 26,
                },
                {
                    name: 'Pablo',
                    age: 0,
                },
            ],
            // > even if we are not using this value we have to re-assign it, otherwise it would be lost if not included
            otherProperty: componentState.otherProperty,
        });
        console.info(componentState, evenAnotherProperty);

        // > evenAnotherProperty is not being lost here because basically the first object we added to the state has 2
        // > different properties: persons and otherProperty, this means evenAnotherProperty is a sibling of this object
    };

    // * Always has to return HTML content.
    // * the content inside the component tag will be recieved inside the component as props.children
    return (
        <div className="App">
            <h1>Hiii, duuude</h1>
            <button onClick={switchNameHandler}>Switch Name</button>
            <Person
                name={componentState.persons[0].name}
                age={componentState.persons[0].age}
            />
            <Person
                name={componentState.persons[1].name}
                age={componentState.persons[1].age}
            />
            <Person
                name={componentState.persons[2].name}
                age={componentState.persons[2].age}
            >
                My Hobbies: gaming
            </Person>
        </div>
    );

    // ! the following code does the same as the previous return statement (but its content is not updated)
    /* return React.createElement(
        'div',
        { className: 'App' },
        React.createElement('h1', null, 'Hiii, duuude')
    ); */
};

export default App;
