import React from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Content from "../Content/Content";
import { IntlProvider } from "react-intl";

const App: React.FC = () => {
    return (
        <IntlProvider messages={{}} locale='en' defaultLocale='en'>
            <Header />
            <Content />
            <Footer />
        </IntlProvider>
    );
};

export default App;