import React from 'react'
import './App.css';
import Cadastro from './Cadastro/Cadastro';
import Inicio from "./Inicio/Inicio"
import Login from './Login/Login';
import { Routes, Route} from 'react-router-dom'
import Home from './Home/Home';
import Painel from './Home/Painel';









function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<Inicio/>}/>
          <Route path="/login" element={<Login/>} />
          <Route path="/cadastro" element={<Cadastro/>} />
          <Route path="/home" element={<Home/>}/>
          <Route path="/painel" element={<Painel/>}/>
         

      </Routes>
      
    </div>
  );
}

export default App;
