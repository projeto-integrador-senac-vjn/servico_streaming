import './App.css';
import Cadastro from './Cadastro/Cadastro';
import Inicio from "./Inicio/Inicio"
import Login from './Login/Login';
import { Routes, Route} from 'react-router-dom'
import Home from './Home/Home';
import PeakyBlinders from './Americanas/PeakyBlinders';
import BreakingBad from './Americanas/BreakingBad';
import Filmes from './Filmes/Filmes';






function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<Inicio/>}/>
          <Route path="/login" element={<Login/>} />
          <Route path="/cadastro" element={<Cadastro/>} />
          <Route path="/home" element={<Home/>}/>
          <Route path="/watch/peakyblinders" element={<PeakyBlinders/>}/>
          <Route path="/watch/breaking" element={<BreakingBad/>}/>
          <Route path="/filmes/:nome" element={<Filmes/>}/>

      </Routes>
      
    </div>
  );
}

export default App;
