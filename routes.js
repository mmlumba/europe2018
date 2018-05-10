import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import App from './containers/App';
import SiteTemplate from './containers/SiteTemplate';

export default () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/auschwitz" render={(props) => (<SiteTemplate siteUniqueNumber={34} name="auschwitz" length={5} {...props} />)} />
                <Route exact path="/budapest" render={(props) => (<SiteTemplate siteUniqueNumber={462} name="budapest" length={5} {...props} />)} />
                <Route exact path="/krakow" render={(props) => (<SiteTemplate siteUniqueNumber={1739} name="krakow" length={5} {...props} />)} />
                <Route exact path="/potsdam-berlin" render={(props) => (<SiteTemplate siteUniqueNumber={624} name="potsdamberlin" length={5} {...props} />)} />
                <Route exact path="/prague" render={(props) => (<SiteTemplate siteUniqueNumber={1928} name="prague" length={5} {...props} />)} />
                <Route exact path="/schonbrunn" render={(props) => (<SiteTemplate siteUniqueNumber={929} name="schonbrunn" length={5} {...props} />)} />
                <Route exact path="/telc" render={(props) => (<SiteTemplate siteUniqueNumber={738} name="telc" length={5} {...props} />)} />
                <Route exact path="/vienna" render={(props) => (<SiteTemplate siteUniqueNumber={1206} name="vienna" length={4} {...props}/>)} />
                <Route exact path="/warsaw" render={(props) => (<SiteTemplate siteUniqueNumber={2068} name="warsaw" length={5} {...props} />)} />
                <Route exact path="/wieliczka-salt-mines" render={(props) => (<SiteTemplate siteUniqueNumber={1854} name="saltmines" length={5} {...props} />)}/>
            </Switch>
        </BrowserRouter>
    )
}