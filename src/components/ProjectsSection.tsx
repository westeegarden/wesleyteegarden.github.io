import projects from "../data/projects";
import ProjectCard from "./ProjectCard";


export default function ProjectsSection() {
    return (
        <section id="projects" className="max-w-5xl mx-auto p-8">
            <h3 className="text-3xl font-semibold mb-8">Projects</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((p) => (
                    <ProjectCard key={p.title} project={p} />
                ))}
            </div>
        </section>
    );
}