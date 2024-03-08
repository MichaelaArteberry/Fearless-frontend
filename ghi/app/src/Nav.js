import { NavLink } from "react-router-dom";

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Conference GO!</a>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="http://localhost:3000/">Home</NavLink>
                        </li>

                        <li className="nav-item">
                        <NavLink className="nav-link" aria-current="page" to="/locations/new">New Location</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/conferences/new">New Conference</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="presentations/new">New Presentation</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="attendees/new">Attend a Conference!</NavLink>
                        </li>

                    </ul>
                </div>
        </nav>
);
}

export default Nav;
