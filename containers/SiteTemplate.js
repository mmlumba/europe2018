import React from 'react';
import {Link} from 'react-router-dom';
import NavBar from './NavBar';

export default class SiteTemplate extends React.Component {
    render() {
        const {
            siteInfo
        } = this.props;

        return(
            <div>
                <NavBar />
                <h2>{siteInfo.site}</h2>
                <p>{siteInfo.short_description}</p>
                <p>Country: {siteInfo.states}</p>
                <p>Date Inscribed: {siteInfo.date_inscribed}</p>
                <h3>Pictures</h3>
            </div>
        )
    }
}