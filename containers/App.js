import React, { Component } from 'react';
import NavBar from '../components/NavBar'

class App extends Component {
    render() {
        return <div className="container-fluid">
            <NavBar />
            <h1 className="mt-3">Europe 2018</h1>
            <p>This is a small informational site that shows all the UNESCO heritage sites I visited on my vacation in April 2018.
                This website is built with React, React Router, and react-images. To view a list of all the sites select the "List of Sites" dropdown and click on any link to view information on a particular site.
            </p>
            <p>API Information from <a href="https://whc.unesco.org">UNESCO World Heritage Center</a></p>
            <p>View the source code in <a href="https://github.com/mmlumba/europe2018">Github</a></p>
            <p>Created by <a href="https://mmlumba.github.io">Marian Lumba</a></p>
        </div>
    }
}

export default App;