import React from 'react';
import {Link} from 'react-router-dom';
import SiteJson from '../output.json';
import NavBar from './NavBar';

export default class SiteTemplate extends React.Component {
    constructor(props){
        super(props);
        this.titleRef = React.createRef();
        this.shortDescRef = React.createRef();
    }

    selectSite = (uniqueNumber) => SiteJson.find(site => site.unique_number === `${uniqueNumber}`);

    renderTitle = () => this.titleRef.current.innerHTML = this.selectSite(this.props.siteUniqueNumber).name_en;

    renderShortDesc = () => this.shortDescRef.current.innerHTML = this.selectSite(this.props.siteUniqueNumber).short_description_en;

    componentDidMount() {
        this.renderTitle();
        this.renderShortDesc();
    }

    componentDidUpdate() {
        this.renderTitle();
        this.renderShortDesc();
    }

    render() {
        let someSite = this.selectSite(this.props.siteUniqueNumber);

        return(
            <div className="container-fluid">
                <NavBar />
                <h2 ref={this.titleRef} className="mt-3"></h2>
                <div class="row">
                    <div className="col-8 mt-2">
                        <span ref={this.shortDescRef}></span>
                        <p>Country: {someSite.states_name_en}</p>
                        <p>Date Inscribed: {someSite.date_inscribed}</p>
                    </div>
                    <div className="col-4">
                        <h4>Site Map</h4>
                        <div className="show-site-map"></div>
                    </div>
                </div>
                <h3>Pictures</h3>
            </div>
        )
    }
}