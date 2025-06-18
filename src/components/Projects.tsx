// src/components/Projects.tsx
import { ProjectCard } from './ProjectCard';
import projeto1 from '../assets/projeto1.png';
import projeto2 from '../assets/projeto2.png';
import projeto3 from '../assets/projeto3.png';
import projeto4 from '../assets/projeto4.png';


export function Projects() {
  return (
    <section id="projetos" className="projects-section">
      <h2 className="projects-title">Projetos</h2>
      <div className="projects-grid">
        <ProjectCard
          title="Landing Page"
          description="Conversão de página modelo da DNC (Figma) para HTML. Projeto básico com estrutura limpa e responsiva."
          imageSrc={projeto1}
          github="https://github.com/DieAllPies/rid189369_desafio1"
        />

        <ProjectCard
          title="Blog responsivo"
          description="Conversão de página modelo DNC para HTML com foco em responsividade. Inclui boas práticas de layout responsivo."
          imageSrc={projeto2}
          github="https://github.com/DieAllPies/rid189369_desafio2"
        />

        <ProjectCard
          title="Gerenciador de Tarefas"
          description="Conversão de layout Figma para tamanhos de tela 1280x832 e 375x932. Projeto voltado para JavaScript e layouts fixos."
          imageSrc={projeto3}
          github="https://github.com/DieAllPies/rid189369_desafio3"
        />

        <ProjectCard
          title="Dashboard de Vendas"
          description="Dashboard criado com instruções passo a passo da DNC usando React e Type. Publicado em Vercel com dados simulados."
          imageSrc={projeto4}
          github="https://github.com/DieAllPies/dnc-sales-dashboard-dennis"
        />
      </div>
    </section>
  );
}
