import './App.css';
import Cadastro from './Cadastro/Cadastro';
import Inicio from "./Inicio/Inicio"
import Login from './Login/Login';
import { Routes, Route} from 'react-router-dom'
import Home from './Home/Home';








function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<Inicio/>}/>
          <Route path="/login" element={<Login/>} />
          <Route path="/cadastro" element={<Cadastro/>} />
          <Route path="/home" element={<Home/>}/>
         

      </Routes>
      
    </div>
  );
}

export default App;
