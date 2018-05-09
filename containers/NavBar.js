import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class App extends Component {
    render() {
        return <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <Link to="/" className="navbar-brand">My App</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to="/" className="nav-link">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item dropdown my-2 my-sm-0">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            List of Sites
                    </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link to="/prague" className="dropdown-item">Historic Centre of Prague</Link>
                            <Link to="/vienna" className="dropdown-item">Historic Centre of Vienna</Link>
                            <Link to="/wieliczka-salt-mines" className="dropdown-item">Wieliczka Salt Mines</Link>
                            <a className="dropdown-item" href="#">Site 3</a>
                        </div>
                    </li>
                </ul>
                
            </div>
        </nav>
    }
}