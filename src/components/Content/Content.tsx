import React from 'react';
import {Route, Switch} from "react-router-dom";
import withUrlParam from "../../HOC/withUrlParam";

/* Pages */
import Home from "../../Pages/Home/Home";
import AboutUs from "../../Pages/AboutUs/AboutUs";
import Item from "../../Pages/Item/Item";

const Content: React.FC = () => {
    return (
        <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/about-us' component={AboutUs} exact />
            <Route path='/store/item/:id' component={withUrlParam(Item)} exact />
        </Switch>
    );
};

export default Content;