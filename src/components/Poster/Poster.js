import "./Poster.css"
import videoPoster from '../../videos/videoPosterPastorets.mp4'
import imatgePoster from '../../images/logos/Poster.jpg'

const Poster = () => {
    return (
      <div>
        <h2>Ja tenim el pòster d'aquest any 2023!</h2>
        <div className="poster">
        <img src={imatgePoster} alt="Pòster" />
        <video controls>
          <source src={videoPoster} type="video/mp4" />
          El teu navegador no suporta la reproducció de vídeos.
        </video>
      </div>
      <p className="descripcio">El dia 11/11 a les 11:30, vam donar a conèixer el cartell d'aquest any, dissenyat per Pau Morales.<br />La presentació la vam fer acompanyats de l'autor, el regidor de cultura Quim Ayats i la participació de les noies de l'Escola Girona En Dansa, que ens van fer una demostració trepidant del que faran aquest any en col·laboració amb els Pastorets de Girona. </p>
      </div>
    );
  };

  export default Poster