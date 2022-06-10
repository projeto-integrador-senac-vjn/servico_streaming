import React from 'react'
import Row from './Row'
import Header from './Header'
import Perguntas from './Perguntas'
import Rodape from './Rodape'

const Inicio = () => {
    require("./Header.css")
    require("./Row.css")
    return(
        <div id='inicio'>
            <Header/>
            <Row/>
            <Perguntas/>
            <Rodape/> 
        </div>
    )
}

export default Inicio;