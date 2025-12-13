import { Link } from "react-router-dom";

export default function Navbar() {
return (
    <nav className="flex justify-between items-start px-8 py-4 shadow bg-white">
        <h1 className="site-title">Wesley Teegarden</h1>
        
        <div className="nav-links">
            <Link to="/Projects">Projects</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/">About Me</Link>
        </div>
    </nav>
);
}