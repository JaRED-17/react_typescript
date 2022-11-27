import React from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Content from "../Content/Content";

const App: React.FC = () => {
    return (
        <>
            <Header />
            <Content />
            <Footer />
        </>
    );
};

export default App;