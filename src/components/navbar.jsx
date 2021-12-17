import React from "react";

//Stateless Functional Component
function Navbar({ totalCounters }) {
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#a">
                        Navbar{" "}
                        <span className="badge badge-pill badge-secondary">
                            {totalCounters}
                        </span>
                    </a>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
