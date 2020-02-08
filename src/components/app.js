import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/header";


function App() {
    
    function getPage() {
        const route = window.location.pathname;
        if (route === "/about") return <AboutPage />;
        return <HomePage/>
    }

    return (
            <div className="container-fluid">
                <Header/>
                { getPage() }
            </div>
        )
}

export default App;