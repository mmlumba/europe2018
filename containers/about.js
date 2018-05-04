import React from 'react';
import {Link} from 'react-router-dom';
import NavBar from './NavBar';
import SiteInfo from '../something.json'

export default class About extends React.Component {
    render() {
        return(
            <div>
                <NavBar />
                <h2>{SiteInfo.site}</h2>
                <p>{SiteInfo.short_description}</p>
                <p>Country: {SiteInfo.states}</p>
                <h3>Pictures</h3>
            </div>
        )
    }
}