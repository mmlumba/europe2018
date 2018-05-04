import React, { Component } from 'react';
import NavBar from './NavBar'
import InputPreview from '../components/InputPreview'
import { connect } from 'react-redux';
import { setMessage } from '../actions/message';
import { Link } from 'react-router-dom';

class App extends Component {
    _onChange = (value) => {
        this.props.dispatch(setMessage(value))
    }

    render() {
        const {message} = this.props.messageReducer;
        return <div>
            <NavBar />
            <h1>My App</h1>
            <p>Welcome to my site</p>
            <InputPreview value={message} onChange={this._onChange}/>
            <Link to="/wieliczka-salt-mines"><button>View a random site!</button></Link>
        </div>
    }
}

export default connect(state => state)(App);