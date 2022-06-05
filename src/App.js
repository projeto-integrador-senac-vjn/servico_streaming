import './App.css';
import Cadastro from './Cadastro/Cadastro';
import Inicio from "./Inicio/Inicio"
import Login from './Login/Login';
import { Routes, Route} from 'react-router-dom'
import Home from './Home/Home';
import Filmes from './Filmes/Filmes';






function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<Inicio/>}/>
          <Route path="/login" element={<Login/>} />
          <Route path="/cadastro" element={<Cadastro/>} />
          <Route path="/home" element={<Home/>}/>
          <Route path="/filmes/:nome" element={<Filmes/>}/>

      </Routes>
      
    </div>
  );
}

export default App;
