import { Link } from "react-router-dom";

export const LandingPage = () => {
    return(
        <div id = "landingPage">
            <span>DISCOVER . COLLECT . LISTEN</span>
            <h1 id = "landingPageHeroText">KTunes</h1>
            <p>Find the soundtrack to your next obsession.</p>
            <Link to="/discover"><button>Explore Albums</button></Link>
        </div>
    );
};