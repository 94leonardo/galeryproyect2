import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Img1 from './componentes/Img1';
import Img2 from './componentes/Img2';
import Img3 from './componentes/Img3';
import Img4 from './componentes/Img4';
import Img5 from './componentes/Img5';
import Img6 from './componentes/Img6';
import Img7 from './componentes/Img7';
import Img8 from './componentes/Img8';
import Img9 from './componentes/Img9';
import Img10 from './componentes/Img10';
import Navegation from './componentes/Navegation';




function App() {
  return (
    <Router>
      <Routes>
        <Route path='/img1' Component={Img1} />
        <Route path='/img2' Component={Img2} />
        <Route path='/img3' Component={Img3} />
        <Route path='/img4' Component={Img4} />
        <Route path='/img5' Component={Img5} />
        <Route path='/img6' Component={Img6} />
        <Route path='/img7' Component={Img7} />
        <Route path='/img8' Component={Img8} />
        <Route path='/img9' Component={Img9} />
        <Route path='/img10' Component={Img10} />
      </Routes>
      <Navegation />
    </Router>

  );
}

export default App;
