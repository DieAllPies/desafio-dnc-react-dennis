
export function AboutMe() {
  function handleScrollToTimeline() {
    const timeline = document.getElementById('timeline');
    if (timeline) {
      timeline.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <section id="sobre" className="about-section">
      <h2>Dennis Alves Pedersen</h2>
      <p>
        Sou um desenvolvedor com experiência em React e TypeScript. Estou sempre em busca de novos desafios para evoluir como profissional.
      </p>
      <div className="about-button-wrapper">
        <button className="cta-button" onClick={handleScrollToTimeline}>
          Saber mais
        </button>
      </div>
    </section>
  );
}
