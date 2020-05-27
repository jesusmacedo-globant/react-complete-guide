import React, { Component } from 'react';
// * this is how css is imported
import './App.css';

class App extends Component {
    /**
     * Always required in components and it always has to return HTML content.
     */
    render() {
        return (
            <div className="App">
                <h1>Hiii, duuude</h1>
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
