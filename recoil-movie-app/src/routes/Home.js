import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import MovieBox from '../components/movies/movieList';
import { loadingState, movieListState } from '../store';

function Home({movie}) {
    const [isLoading, setIsLoading] = useRecoilState(loadingState);
    const [movieList, setMovieList] = useRecoilState(movieListState);

    useEffect(() => {
        movie
        .getMovies()
        .then(result => {
            setMovieList(result)
            setIsLoading(false)
        });
        return() => {
            setIsLoading(true)
        }
    }, []);

    return (
        <div>
            {isLoading ? 
                <div>Loading...</div> : <MovieBox movies={movieList} />}
        </div>
    );
}

export default Home;