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
      <p className="descripcio">L'11 de novembre, vam presentar el cartell d'aquest any a la Plaça dels Apòstols.<br />L'autor del cartell Pau Morales, va estar present juntament amb el regidor de cultura Quim Ayats.<br /> També hi van participar les ballarines de Girona En Dansa, oferint una trepidant demostració del que faran enguany en col·laboració amb els Pastorets de Girona.</p>
      </div>
    );
  };

  export default Poster