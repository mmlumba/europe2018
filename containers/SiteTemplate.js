import React from 'react';
import {Link} from 'react-router-dom';
import SiteJson from '../output.json';
import NavBar from './NavBar';
import Images from '../components/Images';

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
                    <div className="mt-2 p-3">
                        <span ref={this.shortDescRef}></span>
                        <p>Country: {someSite.states_name_en}</p>
                        <p>Date Inscribed: {someSite.date_inscribed}</p>
                    </div>
                </div>
                <h3>Pictures</h3>
                <Images name={this.props.name} picLength={this.props.length} />
            </div>
        )
    }
}