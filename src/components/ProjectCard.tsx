type ProjectCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  github: string;
  stars?: number;
};

export function ProjectCard({ title, description, imageSrc, github, stars }: ProjectCardProps) {
  return (
    <div className="project-card">
      <div className="project-content">
        <img src={imageSrc} alt={title} className="project-image" />
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
      </div>
      <div>
        {stars !== undefined && <p>⭐ {stars} stars</p>}
        <a href={github} target="_blank" rel="noopener noreferrer">
          <button className="project-button">Clique aqui</button>
        </a>
      </div>
    </div>
  );
}
