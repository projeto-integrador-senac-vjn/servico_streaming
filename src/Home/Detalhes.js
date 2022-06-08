import React from 'react'
import NavBar from './NavBar'
import API_KEY from './Tmdb'

function Detalhes({result}) {
  console.log(result);
  return (
    <>
      <NavBar/>
    </>
  )
}

export default Detalhes

export async function getServerSideProps(context){
  const {id} = context.query;

  const request = await fetch(`
    https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=pt-BR`).then(
      (response) => response.json()
    );

    return {
      props: {
        result: request,
      },
    };
}