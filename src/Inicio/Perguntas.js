import React, { useState } from 'react'

const Perguntas = () => {
    require("./Perguntas.css")
    const [isActive, setIsActive] = useState(false);
    const [isActive2, setIsActive2] = useState(false); 
    const [isActive3, setIsActive3] = useState(false);
    const [isActive4, setIsActive4] = useState(false);

    
  return (     
    <div className='container1'>
  
                <h1 className='perguntas'> PERGUNTAS FREQUENTES</h1> 
                <div className='dropdown1' onClick={() => 
                            setIsActive(!isActive)}>
                        <h1> O que é a Pobreflix? </h1>
                        
                </div>  
                        <br/>
                        {isActive && (
                            <h2 className='ativado1'>                   
                                    A Pobreflix é um serviço de transmissão online que oferece uma ampla variedade de  filmes e documentários premiados em milhares de aparelhos conectados à internet.
                                    
                            </h2>
                            
                        )}
                  
                          
        <div className='dropdown2' onClick={() => 
                setIsActive2(!isActive2)}>
                  <h1 > Onde posso fazer? </h1>    
            
        </div>
        <br/>
                {isActive2 && (                 
                        <h2 className='ativado2'>                   
                        Veja detalhes sobre os filmes mais novos e famosos do momento
                        </h2>
                    
                    
                    
                )}           
         
                      
        
        <div className='dropdown3' onClick={() => 
                setIsActive3(!isActive3)}>     
            <h1 >
                    O que eu posso assistir?
            </h1>
        </div>
            <br/>
                {isActive3 && (             
                        <h2 className='ativado3'>                   
                        A Pobreflix tem um grande catálogo de filmes, documentários,  originais Pobreflix premiados e muito mais. Assista o quanto quiser, quando quiser.
                        </h2>

                    
                    
                )}  
         <div className='dropdown3' onClick={() => 
                setIsActive4(!isActive4)}>     
            <h1 >
                    É adequado para crianças?
            </h1>
        </div>
            <br/>
                {isActive4 && (             
                        <h2 className='ativado3'>                   
                                A experiência infantil da Pobreflix faz parte da sua assinatura para que as crianças se divirtam em seu próprio espaço com séries e filmes familiares sob a supervisão dos responsáveis.
                        </h2>

                    
                    
                )}  
        <hr className="hrImagem"/>         
        


    </div>
  )
}

export default Perguntas