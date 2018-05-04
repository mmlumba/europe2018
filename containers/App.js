import React, { Component } from 'react';
import NavBar from './NavBar'

export default class App extends Component {
    render() {
        return <div>
            <NavBar />
            <h1>My App</h1>
            <p>Welcome to my site</p>
        </div>
    }
}