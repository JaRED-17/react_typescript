import React from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Home from "../../Pages/Home/Home"
import AboutUs from "../../Pages/AboutUs/AboutUs"
import {Route, Switch} from "react-router-dom";

const App: React.FC = () => {
    return (
        <>
            <Header />
            <Switch>
                <Route path='/' component={Home} exact />
                <Route path='/about-us' component={AboutUs} exact />
            </Switch>
            <Footer />
        </>
    );
};

export default App;