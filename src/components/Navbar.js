import React from "react";
import { Link } from "gatsby";

export default function Navbar() {
    return (
        <nav>
        <Link to="/">Home</Link>
        <Link to="/page-2">page 2</Link>
        <Link to="/using-typescript">Using Type Script</Link>

        </nav>
            
    )
}

