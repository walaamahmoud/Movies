export class Movies
{
     constructor()
    {
        this.allMovies = document.getElementById("allMovies");
        this.searchMovies = document.getElementById("search");
        this.movie = document.getElementById("data");
        this.nowPlaying = document.getElementById("item1");
        this.popular = document.getElementById("item2");
        this.topRated = document.getElementById("item3");
        this.trending = document.getElementById("item4");
        this.upcoming = document.getElementById("item5");
        this.url =  `https://api.themoviedb.org/3/movie/now_playing?api_key=b0bf746a84c1e6770ebd56d0d6bf6773&language=en-US&page=1`;
        this.displayMovies(this.url);
        this.nowPlaying.addEventListener("click",this.nowPlayingFun.bind(this));
        this.popular.addEventListener("click", this.popularFun.bind(this));
        this.topRated.addEventListener("click", this.topRatedFun.bind(this));
        this.trending.addEventListener("click", this.trendingFun.bind(this));
        this.upcoming.addEventListener("click", this.upcomingFun.bind(this));
        this.allMovies.addEventListener("keyup", this.searchWord.bind(this));
        this.searchMovies.addEventListener("keyup", this.searchCurrentMovies.bind(this,this.url),false);
       

    }
   async displayMovies(url)
    {
        let moviesArray =  await this.getMovies(url);
        let cartoona =``;
        for (let i = 0; i < moviesArray.length; i++) 
        {
           cartoona += `
        <div class="col-md-6 col-lg-4 my-3 myM  shadow">
            <div class="movie shadow rounded position-relative">
                 <div class="post">
                    <img src="https://image.tmdb.org/t/p/w500${moviesArray[i].poster_path}" class="img-fluid rounded post-img">
                    <div class="layer d-flex align-items-center">
                        <div class=" p-0">
                            <h2>${moviesArray[i].title}</h2>
                            <p>${moviesArray[i].overview}</p>
                            <p>rate: ${moviesArray[i].vote_average}</p>
                            <p>${moviesArray[i].release_date}</p>
                        </div>

                    </div>
                 </div>
            </div>
        </div>
           `;
        }
        this.movie.innerHTML = cartoona;
    }
    async getMovies(url)
    {
        let response = await fetch(url);
        response = await response.json();
        let results = await response.results;
        return results;
    }
   
    nowPlayingFun()
    {
        let  url =`https://api.themoviedb.org/3/movie/now_playing?api_key=b0bf746a84c1e6770ebd56d0d6bf6773&language=en-US&page=1` ;
        this.displayMovies(url);
        this.searchMovies.addEventListener("keyup", this.searchCurrentMovies.bind(this,url),false);
    }
    popularFun()
    {
        let url =`https://api.themoviedb.org/3/movie/popular?api_key=b0bf746a84c1e6770ebd56d0d6bf6773&language=en-US&page=1` ;
        this.displayMovies(url);
        this.searchMovies.addEventListener("keyup", this.searchCurrentMovies.bind(this,url),false);
    }
    topRatedFun()
    {
        let url =`https://api.themoviedb.org/3/movie/top_rated?api_key=b0bf746a84c1e6770ebd56d0d6bf6773&language=en-US&page=1` ;
        this.displayMovies(url);
        this.searchMovies.addEventListener("keyup", this.searchCurrentMovies.bind(this,url),false);
    }
    trendingFun()
    {
        let url =`https://api.themoviedb.org/3/trending/movie/day?api_key=b0bf746a84c1e6770ebd56d0d6bf6773`;
        this.displayMovies(url);
        this.searchMovies.addEventListener("keyup", this.searchCurrentMovies.bind(this,url),false);
    }
    upcomingFun()
    {
        let url =`https://api.themoviedb.org/3/movie/upcoming?api_key=b0bf746a84c1e6770ebd56d0d6bf6773&language=en-US&page=1`;
        this.displayMovies(url);
        this.searchMovies.addEventListener("keydown", this.searchCurrentMovies.bind(this));
        this.searchMovies.addEventListener("keyup", this.searchCurrentMovies.bind(this,url),false);
    }
    searchWord()
    {
        let query = this.allMovies.value;
        let url = `https://api.themoviedb.org/3/search/movie?api_key=b0bf746a84c1e6770ebd56d0d6bf6773&language=en-US&query=${query}&page=1&include_adult=false`;
        this.displayMovies(url);
        this.searchMovies.addEventListener("keyup", this.searchCurrentMovies.bind(this,url),false);
    }
    async searchCurrentMovies(url)
    {
        let searchTerm = this.searchMovies.value;
        let moviesArray =  await this.getMovies(url);
        let cartoona = ``;
        for (let i = 0; i < moviesArray.length; i++) {
            if(moviesArray[i].title.toLowerCase().includes(searchTerm.toLowerCase())== true)
            {
                cartoona += `
                <div class="col-md-6 col-lg-4 my-3 myM  shadow">
                    <div class="movie shadow rounded position-relative">
                         <div class="post">
                            <img src="https://image.tmdb.org/t/p/w500${moviesArray[i].poster_path}" class="img-fluid rounded post-img">
                            <div class="layer d-flex align-items-center">
                                <div class=" p-0">
                                    <h2>${moviesArray[i].title}</h2>
                                    <p>${moviesArray[i].overview}</p>
                                    <p>rate: ${moviesArray[i].vote_average}</p>
                                    <p>${moviesArray[i].release_date}</p>
                                </div>
        
                            </div>
                         </div>
                    </div>
                </div>
                   `;
            } 
        }
        for (let i = 0; i < moviesArray.length; i++) 
        {
           cartoona += `
        <div class="col-md-6 col-lg-4 my-3 myM  shadow">
            <div class="movie shadow rounded position-relative">
                 <div class="post">
                    <img src="https://image.tmdb.org/t/p/w500${moviesArray[i].poster_path}" class="img-fluid rounded post-img">
                    <div class="layer d-flex align-items-center">
                        <div class=" p-0">
                            <h2>${moviesArray[i].title}</h2>
                            <p>${moviesArray[i].overview}</p>
                            <p>rate: ${moviesArray[i].vote_average}</p>
                            <p>${moviesArray[i].release_date}</p>
                        </div>

                    </div>
                 </div>
            </div>
        </div>
           `;
        }
        this.movie.innerHTML = cartoona;
    }

   
   

}