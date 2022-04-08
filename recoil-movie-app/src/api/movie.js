class Movie {
    async getMovies(){
        const json = await (
            await fetch(
                `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
            )
        ).json();
        const result = json.data.movies;
        return result;
    }

    async getMovieDetail(id){
        const json = await (
            await fetch(
                `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
            )
        ).json();
        const result = json.data.movie;
        return result;
    }
}

export default Movie;