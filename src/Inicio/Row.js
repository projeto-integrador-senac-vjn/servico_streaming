import React from 'react'

const Row = () => {
    require("./Row.css")
  return (
    <>
        <div className="containerImgTV"> 
                <div>
                    <h1>
                        Aproveite na TV.
                    </h1>
                    <h3>
                        Assista em Smart TVs, PlayStation, Xbox, <br/> Chromecast, Apple TV, aparelhos de Blu-ray e <br/> outros dispositivos.
                    </h3>
                </div>
                <img className="imagemTV" src="https://github.com/karlhadwen/netflix/blob/master/public/images/misc/home-tv.jpg?raw=true" alt='Acessivel para TV'/>
            </div>
            <hr className="hrImagemTV"/>
            <div className="containerImgTV"> 
                <img className="imagemMobile" src="https://raw.githubusercontent.com/karlhadwen/netflix/master/public/images/misc/home-mobile.jpg" alt='Acessivel para Mobile'/>
                <div>
                    <h1 className='topper'>
                        Baixe séries para assistir offline
                    </h1>
                    <h3>
                        Salve seus títulos favoritos e sempre tenha <br/> algo para assistir. 
                    </h3>
                </div>
                
            </div>
            <hr className="hrImagemTV"/>
            <div className="containerImgTV"> 
                <div>
                    <h1>
                        Aproveite na TV.
                    </h1>
                    <h3>
                        Assista em Smart TVs, PlayStation, Xbox, <br/> Chromecast, Apple TV, aparelhos de Blu-ray e <br/> outros dispositivos.
                    </h3>
                </div>
                <img className="imagemTV" src="https://github.com/karlhadwen/netflix/blob/master/public/images/misc/home-imac.jpg?raw=true" alt='Acessivel para Computadores'/>
            </div>
            <hr className="hrImagemTV"/>
            
     
        <div>


    </div>
            <div>            
            </div>
    </>
  )
}

export default Row