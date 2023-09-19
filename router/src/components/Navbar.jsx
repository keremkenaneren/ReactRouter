import { NavLink} from "react-router-dom";

function Navbar() {

    return (
        <nav>
            {/*<Link to="/">Home</Link>*/}
            {/*<Link to="/about">About</Link>*/}
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </nav>
    );
}

export default Navbar ;
