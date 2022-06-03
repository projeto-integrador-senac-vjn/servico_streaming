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
                                    A Pobreflix é um serviço de transmissão online que oferece uma ampla variedade de séries, filmes e documentários premiados em milhares de aparelhos conectados à internet.
                                    Você pode assistir a quantos filmes e séries quiser, quando e onde quiser, sem comerciais – tudo por um preço mensal bem acessível. Aqui você sempre encontra novidades. A cada semana, adicionamos novas séries e filmes.
                            </h2>
                            
                        )}
                  
                          
        <div className='dropdown2' onClick={() => 
                setIsActive2(!isActive2)}>
                  <h1 > Onde posso assistir? </h1>    
            
        </div>
        <br/>
                {isActive2 && (                 
                        <h2 className='ativado2'>                   
                        Assista onde quiser, quando quiser. Faça login com sua conta Pobreflix em pobreflix.com para começar a assistir no computador ou em qualquer aparelho conectado à Internet compatível com o aplicativo Netflix, como Smart TVs, smartphones, tablets, aparelhos de streaming e videogames. <br/><br/>
                        Você também pode baixar a sua série favorita com o aplicativo Pobreflix para iOS, Android ou Windows 10. Use downloads para levar a Pobreflix para onde quiser sem precisar de conexão com a Internet. Leve a Pobreflix com você para qualquer lugar.
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
                        A Pobreflix tem um grande catálogo de filmes, documentários, séries, originais Pobreflix premiados e muito mais. Assista o quanto quiser, quando quiser.
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