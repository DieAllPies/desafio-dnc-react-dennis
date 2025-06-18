import { useEffect, useState } from 'react';
import { ProjectCard } from './ProjectCard';
import projeto1 from '../assets/projeto1.png';
import projeto2 from '../assets/projeto2.png';
import projeto3 from '../assets/projeto3.png';
import projeto4 from '../assets/projeto4.png';

type Project = {
  title: string;
  description: string;
  imageSrc: string;
  github: string;
  repo: string; // user/repo format
  stars?: number;
};

export function Projects() {
  const [projects, setProjects] = useState<Project[]>([
    {
      title: 'Landing Page',
      description: 'Conversão de página modelo da DNC no Figma para HTML.',
      imageSrc: projeto1,
      github: 'https://github.com/DieAllPies/rid189369_desafio1',
      repo: 'DieAllPies/rid189369_desafio1',
    },
    {
      title: 'Blog responsivo',
      description: 'Conversão de página modelo DNC no Figma para HTML com foco em responsividade.',
      imageSrc: projeto2,
      github: 'https://github.com/DieAllPies/rid189369_desafio2',
      repo: 'DieAllPies/rid189369_desafio2',
    },
    {
      title: 'Gerenciador de Tarefas',
      description: 'Conversão de página modelo DNC no Figma para JavaScript para layouts fixos.',
      imageSrc: projeto3,
      github: 'https://github.com/DieAllPies/rid189369_desafio3',
      repo: 'DieAllPies/rid189369_desafio3',
    },
    {
      title: 'Dashboard de Vendas',
      description: 'Dashboard com React e TypeScript publicado na Vercel.',
      imageSrc: projeto4,
      github: 'https://github.com/DieAllPies/dnc-sales-dashboard-dennis',
      repo: 'DieAllPies/dnc-sales-dashboard-dennis',
    },
  ]);

  useEffect(() => {
    const fetchStars = async () => {
      const updated = await Promise.all(
        projects.map(async (project) => {
          try {
            const response = await fetch(`https://api.github.com/repos/${project.repo}`);
            if (!response.ok) throw new Error('Failed to fetch');
            const data = await response.json();
            return { ...project, stars: data.stargazers_count };
          } catch {
            return { ...project, stars: 0 };
          }
        })
      );
      setProjects(updated);
    };

    fetchStars();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section id="projetos" className="projects-section">
      <h2 className="projects-title">Projetos</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}