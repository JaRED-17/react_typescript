import React from 'react';
import {Route, Switch} from "react-router-dom";

/* Pages */
import Home from "../../Pages/Home/Home"
import AboutUs from "../../Pages/AboutUs/AboutUs"

const Content: React.FC = () => {
    return (
        <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/about-us' component={AboutUs} exact />
        </Switch>
    );
};

export default Content;