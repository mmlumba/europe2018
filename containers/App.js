import React, { Component } from 'react';
import NavBar from './NavBar'
import { Link } from 'react-router-dom';

class App extends Component {
    render() {
        return <div className="container">
            <NavBar />
            <h1>Europe 2018</h1>
            <p>This is a small informational site that shows all the UNESCO heritage sites I visited on my vacation in April 2018.
                This website is built with React and React Router. To view a list of all the sites select the "List of Sites" dropdown and click on any link to view information on a particular site.
            </p>
        </div>
    }
}

export default App;