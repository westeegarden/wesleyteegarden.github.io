export default function Navbar() {
return (
    <nav className="flex justify-between items-center px-8 py-4 shadow bg-white">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <div className="space-x-6 text-lg">
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#contact" className="hover:underline">Contact</a>
        </div>
    </nav>
);
}