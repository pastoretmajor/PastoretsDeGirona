import "./Concurs.css"

import imatgeConcurs from '../../images/logos/concurs.jpeg'

const Concurs = () => {
  return (
    <section className="concurs-section">
      <div className = "concurs">
        <img src={imatgeConcurs} alt="Imatge informativa sobre un concurs de posters que fem, per més informació anar a la pàgina concurs"/>
      </div>
    </section>
  );
}

export default Concurs
