import { useState, useEffect, useRef } from "react";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { NavBar } from "./components/navBar";
import "animate.css";
import { Welcome } from "./components/welcome";
import "bootstrap/dist/css/bootstrap.min.css";
import { News } from "./components/news";

export const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true,
});

const App = () => {
    const [landingPageData, setLandingPageData] = useState({});
    useEffect(() => {
        setLandingPageData(JsonData);
    }, []);

    const first = useRef();

    return (
        <div>
            <NavBar primer={first} />
            <Welcome data={landingPageData.Header} />
            <About data={landingPageData.About} />
            <Services ref={first} data={landingPageData.Services} />
            <Gallery data={landingPageData.Gallery} />
            <News data={landingPageData.News} />
            <Team data={landingPageData.Team} />
            <Contact data={landingPageData.Contact} />
        </div>
    );
};

export default App;
