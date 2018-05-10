import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class App extends Component {
    render() {
        return <nav className="navbar navbar-expand-sm navbar-light navbar-custom">
            <Link to="/" className="navbar-brand">Europe 2018</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item dropdown my-2 my-sm-0">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            List of Sites
                    </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link to="/auschwitz" className="dropdown-item">Auschwitz-Birkenau</Link>
                            <Link to="/budapest" className="dropdown-item">Budapest, including the Banks of the Danube, the Buda Castle Quarter and Andrássy Avenue</Link>
                            <Link to="/krakow" className="dropdown-item">Historic Centre of Krakow</Link>
                            <Link to="/potsdam-berlin" className="dropdown-item">Palaces and Parks of Potsdam and Berlin</Link>
                            <Link to="/prague" className="dropdown-item">Historic Centre of Prague</Link>
                            <Link to="/schonbrunn" className="dropdown-item">Palace and Gardens of Schönbrunn</Link>
                            <Link to="/telc" className="dropdown-item">Historic Centre of Telc</Link>
                            <Link to="/vienna" className="dropdown-item">Historic Centre of Vienna</Link>
                            <Link to="/warsaw" className="dropdown-item">Historic Centre of Warsaw</Link>
                            <Link to="/wieliczka-salt-mines" className="dropdown-item">Wieliczka Salt Mines</Link>
                        </div>
                    </li>
                </ul>
                
            </div>
        </nav>
    }
}