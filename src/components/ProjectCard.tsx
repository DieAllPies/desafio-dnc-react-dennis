// src/components/ProjectCard.tsx
type ProjectCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  github: string;
};

export function ProjectCard({ title, description, imageSrc, github }: ProjectCardProps) {
  return (
    <div className="project-card">
      <img src={imageSrc} alt={title} className="project-image" />
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
      <a href={github} target="_blank" rel="noopener noreferrer">
        <button className="project-button">Clique aqui</button>
      </a>
    </div>
  );
}
