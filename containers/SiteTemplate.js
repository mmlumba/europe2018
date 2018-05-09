import React from 'react';
import {Link} from 'react-router-dom';
import SiteJson from '../something.json';
import NavBar from './NavBar';

export default class SiteTemplate extends React.Component {
    
    removePTags = (text) => text.replace(/<(\/*p)>/g, "");

    selectSite = (uniqueNumber) => SiteJson.find(site => site.unique_number === uniqueNumber);

    render() {
        let someSite = this.selectSite(this.props.siteUniqueNumber);

        return(
            <div className="container">
                <NavBar />
                <h2>{someSite.site}</h2>
                <div class="row">
                    <div className="formatSiteInformation col-8">
                        <p>{this.removePTags(someSite.short_description)}</p>
                        <p>Country: {someSite.states}</p>
                        <p>Date Inscribed: {someSite.date_inscribed}</p>
                    </div>
                    <div className="showSiteMap col-4">
                        <h4>Site Map</h4>
                    </div>
                </div>
                <h3>Pictures</h3>
            </div>
        )
    }
}