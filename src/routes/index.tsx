import { Routes, Route } from 'react-router-dom';
import Confined from '../pages/confined';
import Home from '../pages/home';
import HydrographicBasin from '../pages/hydrographicBasin';
import Pasture from '../pages/pasture';
import SemiConfined from '../pages/semiConfined';
import BroilerBirds from '../pages/broilerBirds';
import Swine from '../pages/swine';
import ScarcityImpacts from '../pages/ scarcityImpacts';
import Authors from '../pages/ authors';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hydrographic-basin" element={<HydrographicBasin />} />
      <Route path="/pasture" element={<Pasture />} />
      <Route path="/semi-confined" element={<SemiConfined />} />    
      <Route path="/confined" element={<Confined />} />
      <Route path="/broiler-birds" element={<BroilerBirds />} />
      <Route path="/swine" element={<Swine />} />
      <Route path="/scarcity-impacts" element={<ScarcityImpacts />} />
      <Route path="/authors" element={<Authors />} />
    </Routes>
  );
}

export default App;