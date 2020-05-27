import React, { Component } from 'react';
// * this is how css is imported
import './App.css';
// * import custom components
import Person from './Person/Person';

/**
 * This is a class-based or stateful component because it is being created as a class and could have a state.
 */
class App extends Component {
    /**
     * Always required in components and it always has to return HTML content.
     */
    render() {
        // * the content inside the component tag will be recieved inside the component as props.children
        return (
            <div className="App">
                <h1>Hiii, duuude</h1>
                <Person name="Jesus" age="19" />
                <Person name="La Luisa" age="26" />
                <Person name="Pablo" age="15">
                    My Hobbies: gaming
                </Person>
            </div>
        );

        // * the following code does the same as the previous return statement
        /* return React.createElement(
            'div',
            { className: 'App' },
            React.createElement('h1', null, 'Hiii, duuude')
        ); */
    }
}

export default App;
