const API_KEY = 'a6325de08416b368b47a70cd06ebf05e'
const API_BASE = 'https://api.themoviedb.org/3'


/*

-Originais
-Recomendados
-melhores votados
-ação
-comédia 
-terror
-romance
-documentarios
*/

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json
}



export default {
    getHomeList: async () => {
        return [
            {
                slug: "toprated",
                title: "Em Alta",
                items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },
        
            {
                slug: "action",
                title: "Ação",
                items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "comedy",
                title: "Comédia",
                items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "horror",
                title: "Terror",
                items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "romance",
                title: "Romance",
                items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "documentary",
                title: "Documentários",
                items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "popular",
                title: "Populares",
                items: await basicFetch(`/discover/movie?popular&language=pt-BR&api_key=${API_KEY}`)
            },
            
            

        ];
    },
    getMovieInfo: async (movieId, type)=> {
        let info = {};

        if(movieId){
            switch(type){
                case 'movie':
                    info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`)
                break;
                case 'tv':
                    info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`)
                break;
                default:
                    info = null;
                break;
            }
        }

        return info
    },
        getOriginals: async() => {
            return [
            
                {
                    slug: "originals",
                    title: "Originais da Pobreflix",
                    items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
                    
                }
            ]
        }
    }
