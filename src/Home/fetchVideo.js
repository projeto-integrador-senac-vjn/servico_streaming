const fetchVideo = async() => {
    if (id) {
      axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=pt-BR`)
      .then((res) => {
        setVideo(res.data.results[0]?.key)
        
      })
      .catch((error) => {
        alert(error.message)
      })
    }
  }