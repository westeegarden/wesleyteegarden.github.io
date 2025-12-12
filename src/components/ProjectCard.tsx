export type Project = {
    title: string;
    description: string;
    link?: string;
};

type Props = {
    project: Project;
};

export default function ProjectCard({ project }: Props) {
    return (
        <div className="p-5 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-bold mb-2">{project.title}</h4>
            <p className="text-gray-700 mb-4">{project.description}</p>
            {project.link && (
                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                >
                    View Project
                </a>
            )}
        </div>
    );
}