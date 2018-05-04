import React from 'react';
import SaltMines from '../something.json';
import SiteTemplate from './SiteTemplate';

export default class WieliczkaSaltMines extends React.Component {
    render() {
        return <div>
            <SiteTemplate siteInfo={SaltMines} />
        </div>
    }
}