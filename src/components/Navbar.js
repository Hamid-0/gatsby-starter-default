import React from "react";
import { Link } from "gatsby";

export default function Navbar() {
    return (
        <nav>
        <Link to="/">Home</Link>
        <Link to="/page-2">Page 2</Link>
        <Link to="/using-typescript">Using Type Script</Link>
        <Link to="/using-ssr">Using SSR</Link>
        <Link to="/using-dsg">Using DSG</Link>

        </nav>
            
    )
}

