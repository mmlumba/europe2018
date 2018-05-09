import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import App from './containers/App';
import SiteTemplate from './containers/SiteTemplate';

export default () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/prague" render={(props) => (<SiteTemplate siteUniqueNumber={1928} {...props} />)} />
                <Route exact path="/vienna" render={(props) => (<SiteTemplate siteUniqueNumber={1206} {...props}/>)} />
                <Route exact path="/wieliczka-salt-mines" render={(props) => (<SiteTemplate siteUniqueNumber={1854} {...props} />)}/>
            </Switch>
        </BrowserRouter>
    )
}