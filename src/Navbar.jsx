import { Link } from "react-router-dom";

export const Navbar = () => {
    return(
        <div id = "navPanel">
            <Link to = "/" aria-label = "Home"><i className="fa-solid fa-house"></i></Link>
            <Link to = "/discover" aria-label = "Discover albums"><i className="fa-solid fa-music"></i></Link>
            <Link to = "/feedback" aria-label = "Feedback form"><i className="fa-solid fa-pen-to-square"></i></Link>
        </div>
    );
};