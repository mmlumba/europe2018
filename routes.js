import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import App from './containers/App';
import SiteTemplate from './containers/SiteTemplate';
import WieliczkaSaltMines from './containers/WieliczkaSaltMines';

export default () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/wieliczka-salt-mines" component={WieliczkaSaltMines} />
            </Switch>
        </BrowserRouter>
    )
}