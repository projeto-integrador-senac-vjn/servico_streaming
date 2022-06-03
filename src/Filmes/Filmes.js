import React from 'react'

import {useParams} from 'react-router-dom'

function Filmes() {
    require("./Filmes.css")

    console.log(useParams())



    const obj = [
        {
            id: 0, 
            nome: 'breakingbad',
            descricao: 'Breaking Bad é uma série de televisão americana criada e produzida por Vince Gilligan. Ela retrata a vida do químico Walter White, um homem brilhante frustrado em dar aulas para adolescentes do ensino médio enquanto lida com um filho sofrendo de paralisia cerebral, uma esposa grávida e dívidas intermináveis',
            imagem: 'https://occ-0-185-1740.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABS1kQ3bLw61sI8nNQHftRAKuEw-TfNIAjZ2UnZKfwlSWMuc7JVGnvJiFqvkem_5adGMUswsUoJjL0zyIkyIK2QS7Cah82EJv7CKrzZDkapM.webp?r=c0d' 
        }
    ]

  return (
    <div>
        <div className='contbreaking'>
            <img className='img' src={obj[useParams().id].imagem}/>
            <p className='descricao'> {obj[useParams().id].descricao}</p>

        </div>
    </div>
    
  )
}

export default Filmes