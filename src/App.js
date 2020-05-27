import React, { Component } from 'react';
// * this is how css is imported
import './App.css';
// * import custom components
import Person from './Person/Person';

/**
 * This is a class-based or stateful component because it is being created as a class and could have a state.
 */
class App extends Component {
    // * in order to react work properly with its state, this name cannot be changed
    state = {
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
    };

    /**
     * Event listening for click event in button. All available events are here:
     * https://reactjs.org/docs/events.html#supported-events
     */
    switchNameHandler = () => {
        this.setState({
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
        });
    };

    /**
     * Always required in components and it always has to return HTML content.
     */
    render() {
        // * the content inside the component tag will be recieved inside the component as props.children
        return (
            <div className="App">
                <h1>Hiii, duuude</h1>
                <button onClick={this.switchNameHandler}>Switch Name</button>
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}
                />
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                />
                <Person
                    name={this.state.persons[2].name}
                    age={this.state.persons[2].age}
                >
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
