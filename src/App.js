import { HashRouter as Router, Routes, Route} from 'react-router-dom';
import Inici from './pages';
import Lobra from './pages/lobra';
import Equip from './pages/equip';
import Transparencia from './pages/transparencia';
import Patrocinadors from './pages/patrocinadors';
import Collaboradors from './pages/subvencions';
import Contacte from './pages/contacte';
import Tecnics from './pages/tecnics';
import Actors from './pages/a&a';
import Ajudants from './pages/ajudants';
import Entrades from './pages/entrades';
import Manela from './pages/manela';
import Associacio from './pages/associacio';
import Valors from './pages/valors';
import Soci from './pages/soci';
import Fotos from './pages/fotos';
import Premsa from './pages/premsa';

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Inici />} />
          <Route path="/lobra" element={<Lobra/>}/>
          <Route path="/equip" element={<Equip />} />
          <Route path="/transparencia" element={<Transparencia />} />
          <Route path="/patrocinadors" element={<Patrocinadors />} />
          <Route path="/collaboradors" element={<Collaboradors />} />
          <Route path="/contacte" element={<Contacte />} />
          <Route path="/tecnics" element={<Tecnics />} />
          <Route path="/actors" element={<Actors />} />
          <Route path="/ajudants" element={<Ajudants />} />
          <Route path="/entrades" element={<Entrades />} />
          <Route path="/manela" element={<Manela />} />
          <Route path="/associacio" element={<Associacio />} />
          <Route path="/valors" element={<Valors />} />
          <Route path="/soci" element={<Soci />} />
          <Route path="/fotos" element={<Fotos />} />
          <Route path="/premsa" element={<Premsa />} />
        </Routes>
    </Router>
  )
}

export default App