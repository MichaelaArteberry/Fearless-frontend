function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Conference GO!</a>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="http://localhost:3000/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="http://localhost:3000/new-location.html">New Location</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="http://localhost:3000/new-conference.html">New Conference</a>
                        </li>
                    </ul>
                </div>
        </nav>
);
}

export default Nav;
