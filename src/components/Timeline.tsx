// src/components/Timeline.tsx
import ellipse from '../assets/Ellipse.svg';
import rectangle from '../assets/Rectangle.svg';

export function Timeline() {
    const events = [
        {
            year: '2023',
            text: 'Decidi fazer a transição de carreira: de professor para engenheiro de software.',
        },
        {
            year: '2023',
            text: 'Em novembro, iniciei o bacharelado em Engenharia de Software pela USF.',
        },
        {
            year: '2024',
            text: 'Em outubro, comecei o Bootcamp em Engenharia de Software da Escola DNC.',
        },
        {
            year: '2025',
            text: 'Participando em um projeto prático com a empresa a Healz, via a Escola DNC.',
        },
    ];


  return (
    <section id="timeline" className="timeline-section">
      <h2 className="timeline-title">Sobre mim</h2>

      <div className="timeline-container">
        {/* Years */}
        <div className="timeline-years">
          {events.map((event, index) => (
            <span key={index} className="timeline-year">{event.year}</span>
          ))}
        </div>

        {/* Horizontal bar with circles */}
        <div className="timeline-bar-wrapper">
          <img src={rectangle} alt="Linha do tempo" className="timeline-bar" />
          <div className="timeline-circles">
            {events.map((_, index) => (
              <img key={index} src={ellipse} alt="Marco" className="timeline-circle" />
            ))}
          </div>
        </div>

        {/* Descriptions */}
        <div className="timeline-descriptions">
          {events.map((event, index) => (
            <p key={index} className="timeline-text">{event.text}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
