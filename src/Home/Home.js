import React, {useEffect, useState} from "react";
import '../App.css'
import Tmdb from "./Tmdb";
import MovieRow from "./MovieRow";
import FeaturedMovie from "./FeaturedMovie";
import NavBar from "./NavBar";
import ModalDetalhes from "./ModalDetalhes";


export default () => {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [originais, setOriginais] = useState([]);

  const [itemId, setItemId] = useState();

  

  const itemSelected = (itemId) => {
    setItemId(itemId);

  };

  useEffect(()=> {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      setMovieList(list)

      let originais = await Tmdb.getOriginals();
      setOriginais(originais)
      
     
      //Pegando o featured   
      let originals = originais.filter(i=>i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length -1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo);

      
    }
    

    loadAll();
  }, []);

  return(
    <div className="page">

    <NavBar/>

    {featuredData &&
      <FeaturedMovie item={featuredData}/>
    }

      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} onItemSelected={itemSelected} />
        ))}
      </section>


      {movieList.length <= 0 &&
      <div className="loading">
          <img src="https://i.gifer.com/8Etj.gif" alt="Carregando" />
      </div>
      }

      <ModalDetalhes id={itemId} />

    </div>
  );
}