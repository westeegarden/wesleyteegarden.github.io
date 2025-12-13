export default function Navbar() {
return (
    <nav className="flex justify-between items-start px-8 py-4 shadow bg-white">
        <h1 className="site-title">Wesley Teegarden</h1>
        <div className="nav-links">
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
            <a href='#resume'>Resume</a>
            <a href='#about'>About</a>
        </div>
    </nav>
);
}