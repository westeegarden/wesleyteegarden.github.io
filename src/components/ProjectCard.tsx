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
        <h3>{title}</h3>
        <p>{description}</p>

        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer">
            View Project →
          </a>
        )}
      </div>

      <img src={image} alt={title} className="project-image" />
    </div>
  );
}
