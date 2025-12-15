import ProjectCard from "../components/ProjectCard";

const projects = [
    {
        title: "Doppelganger ML Guitar Pedal",
        description: "A machine learning powered guitar pedal that can mimic the sound of any guitar tone it is trained on.",
        image: "/public/guiUpdate.jpg",
        link: "/doppelganger",
    },
    {
        title: "NiteOut Event Finder App",
        description: "A mobile app that helps users find local events and activities based on their interests and location.",
        image: "/public/NiteOutHome.jpg",
        link: "/About",
    },
    {
        title: "Compatible Chords CLI Tool",
        description: "A command-line tool that helps users learn about music theory and chord progressions.",
        image: "/public/compChordsLogo.jpg",
        link: "/About",
    },
    {
        title: "Mixing Master AI Agent",
        description: "An AI agent built on NeuralSeek's mAIstro platform that provides music producers with intelligent mixing and mastering suggestions.",
        image: "/public/NeuralSeekLogo.jpg",
        link: "/About",
    },
    {
        title: "Multi-lay VST Plugin",
        description: "A VST plugin that allows users to create complex layered sounds using three variable delay chanels.",
        image: "/public/MultiLayGUI.jpg",
        link: "/About",
    },
    {
        title: "Cold Cuts Score",
        description: "An original composition for jazz sextet.",
        image: "/public/coldCutsSnip.jpg",
        link: "/About",
    }
];

export default function Projetcs() {
  return (
    <div className="projects-page">
        <h2 className="projects-header">My Projects</h2>
    
        <section>
            {projects.map((project, index) => (
                <ProjectCard
                key={project.title}
                {...project}
            imagePosition={index % 2 === 0 ? "right" : "left"}
            />
        ))}
        </section>
    </div>
  );
}