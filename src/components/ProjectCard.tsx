import { Link } from "react-router-dom";

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  link: string;
  imagePosition?: "left" | "right";
};

export default function ProjectCard({
  title,
  description,
  image,
  link,
  imagePosition = "right",
}: ProjectCardProps) {
  return (
    <div className={`project-card ${imagePosition}`}>
      <div className="project-content">
        <h2 className="project-title">{title}</h2>
        <p>{description}</p>

        {link && (
          <Link to={link}>View Project →</Link>
        )}
      </div>

      <img src={image} alt={title} className="project-image" />
    </div>
  );
}
