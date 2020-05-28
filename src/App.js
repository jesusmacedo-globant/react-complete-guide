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
                id: '1',
                name: 'Jesus',
                age: 19,
            },
            {
                id: '2',
                name: 'Luisa',
                age: 26,
            },
            {
                id: '3',
                name: 'Pablo',
                age: 15,
            },
        ],
        showPersons: false,
    };

    /**
     * Event listening for click event in button. All available events are here:
     * https://reactjs.org/docs/events.html#supported-events
     * @param newName received when eventListener is fired FROM the child component and can also be fired from inside.
     */
    switchNameHandler = (newName) => {
        this.setState({
            persons: [
                {
                    id: '1',
                    name: 'Jesus',
                    age: 29,
                },
                {
                    id: '2',
                    name: 'Luisa',
                    age: 26,
                },
                {
                    id: '3',
                    name: newName,
                    age: 0,
                },
            ],
        });
    };

    /**
     * Event listener for changing the name from the child component and recieve here the new value.
     * @param event from HTMl event onChange.
     * @param id from selected `Person`.
     */
    handleOnChangeName = (event, id) => {
        // * get id from selected Person
        const personIndex = this.state.persons.findIndex((person) => {
            return person.id === id;
        });

        // * create new copy in a new variable for changing the Person value
        const person = { ...this.state.persons[personIndex] };
        person.name = event.target.value;
        // * create new copy of whole array for changing the specific Person value
        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({
            persons: persons,
        });
    };

    /**
     * * Always remember to create copies of values for avoiding state manipulation directly.
     */
    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({ showPersons: !doesShow });
    };

    /**
     * > remember to avoid modifying the state directly, ALWAYS create a new constant with the current value and then
     * > set the new value
     */
    deletePersonHandler = (personIndex) => {
        // * const persons = this.state.persons.slice(); <- 1st way of creating a new copy
        const persons = [...this.state.persons]; // * <- 2nd way of creating a new copy
        persons.splice(personIndex, 1);
        this.setState({ persons: persons });
    };

    /**
     * Always required in components and it always has to return HTML content.
     */
    render() {
        // * there are 2 ways of adding styles on an element, this is the inline method and we could also use a file
        // > this is applied in: style={customStyle}
        const customStyle = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid orange',
            padding: '8px',
            cursor: 'pointer',
        };

        // * cleaner way of handling component display. At the end of the day render() is CALLED MORE THAN ONCE
        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        // * remember map also returns index
                        // > this.handleOnChangeName is called like this in order to pass the HTML event
                        return (
                            <Person
                                key={person.id}
                                name={person.name}
                                age={person.age}
                                onClick={this.deletePersonHandler.bind(
                                    this,
                                    index
                                )}
                                onChange={(event) =>
                                    this.handleOnChangeName(event, person.id)
                                }
                            />
                        );
                    })}
                </div>
            );
        }

        // * the content inside the component tag will be recieved inside the component as props.children
        // > this.myFunction.bind(this, 'data') this is the preferred way of passing data to a function, recommended
        // ! () => this.myFunction('data') this will work but components are reloaded continously, NOT recommended
        // * we can add simple expressions in order to render/hide content: both of them must be wrapped inside {}
        // > {persons} already contains null or JSX content, so it is the simple way of using this condition
        return (
            <div className="App">
                <h1>Hiii, duuude</h1>
                <button onClick={this.togglePersonsHandler} style={customStyle}>
                    Toggle Persons
                </button>
                {persons}
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
