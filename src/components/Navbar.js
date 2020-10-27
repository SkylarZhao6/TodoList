import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div>
            <Link to="/">Home</Link>
            {" |\n "}
            <Link to="/API"> Holidays</Link>
            {" |\n "}
            <Link to="/about"> About Us</Link>
        </div>
    );
}

export default Navbar;
