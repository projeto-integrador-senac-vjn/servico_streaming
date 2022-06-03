import React from 'react'


import {Link} from 'react-router-dom'

function Americanas() {
    require("./GlobalFilmes.css")
  return (
    <>
        <h1>Séries Americanas</h1>
        <div className='americanas'>
           <Link to="/watch/peakyblinders"> <img className='peaky' src='https://nomoremag.com/wp-content/uploads/2020/09/Peaky-Blinders.jpg' alt='peaky/img'/> </Link>
           <Link to="/watch/breaking"><img className='breaking' src='https://img.elo7.com.br/product/zoom/1DFAEEB/poster-cartaz-breaking-bad-serie-netflix-sucesso.jpg' alt='breakingbad/img'/> </Link>
           <img className='list' src='https://limaomecanico.com.br/wp-content/uploads/2019/08/lista-negra.jpg' alt='blacklist/img'/>
           <img className='gotham' src='https://img.elo7.com.br/product/original/26A8AC6/big-poster-serie-gotham-lo01-tamanho-90x60-cm-nerd.jpg' alt='gotham/img'/>
           <img className='flash' src='https://img.elo7.com.br/product/zoom/26B5DAC/big-poster-serie-the-flash-lo10-tamanho-90x60-cm-the-flash.jpg' alt='flash/img'/>
           <img className='legends' src='https://www.themoviedb.org/t/p/original/icv3e1l8od9VjQD4NlvpBySyY09.jpg' alt='dclegends/img'/>
           <img className='vikings' src='https://uauposters.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/2/0/201906131409-uau-posters-series-seriado-vikings.jpg' alt='viking/img'/>
           <img className='murder' src='https://upload.wikimedia.org/wikipedia/pt/f/f0/How_to_Get_Away_with_Murder_Temporada_1_Poster.jpg' alt='murder/img'/> 
           <img className='dead' src='https://walkingdeadbr.com/wp-content/uploads/2021/12/the-walking-dead-1-temporada-posteres-alternativos-001-scaled.jpg' alt='dead/img'/>

        </div>

           

    </>
  )
}

export default Americanas