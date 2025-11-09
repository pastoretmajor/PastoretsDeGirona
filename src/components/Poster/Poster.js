import "./Poster.css"
import imatgePoster from '../../images/logos/poster2025.png'

const Poster = () => {
return (
    <section className="poster-section">
      <h2>Ja tenim el pòster d'aquesta edició 2025!</h2>
      <div className="poster">
        <img src={imatgePoster} alt="Pòster" />
       </div>
      <p className="descripcio">El dia 6 de novembre, es va fer la roda de premsa per presentar el cartell dels Pastorets de Girona d'aquest any.<br></br> En l'acte hi eren presents el regidor de cultura Quima Ayats, la presidenta de la Associació Pastorets de Girona, Marta Nadal, el director de l'obra Salvi de Castro i l'autor del cartell Adrià Cano Puigvert.</p>
    </section>
  );
}

  export default Poster
