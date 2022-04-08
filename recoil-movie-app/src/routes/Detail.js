import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { movieState, loadingState } from '../store';

function Detail({movie}) {
    const {id} = useParams();
    const [isLoading, setIsLoading] = useRecoilState(loadingState);
    const [selectedMovie, setSelectedMovie] = useRecoilState(movieState);
    useEffect(() => {
        movie
        .getMovieDetail(id)
        .then(result => {
            console.log(result)
            setIsLoading(false)
            setSelectedMovie(result)
        });
        return() => {
            setIsLoading(true)
        }
    }, []);
    return (
        <div>
            {isLoading ? 
                <div>Loading...</div> : <img src={selectedMovie.medium_cover_image} alt=""/>}
        </div>
    );
}

export default Detail;