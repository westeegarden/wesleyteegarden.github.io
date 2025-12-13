export default function Navbar() {
return (
    <nav className="flex justify-between items-start px-8 py-4 shadow bg-white">
        <h1 className="site-title">Wesley Teegarden</h1>
        <div className="space-x-6 text-lg">
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#contact" className="hover:underline">Contact</a>
            <a href='#resume' className="hover:underline">Resume</a>
            <a href='#about' className="hover:underline">About</a>
        </div>
    </nav>
);
}