import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.ul`

`;
const ListItem = styled.li`

`;
const Title = styled.h2`

`;
const Thumnail = styled.span``;


function MovieBox({movies}) {    
    return (
        <Container>
        {movies.map((movie,index) => {
            return(
                <ListItem key={`movie_${index}`}>
                    <Thumnail>
                        <Link to={`/movie/${movie.id}`}><img src={movie.medium_cover_image} alt="" /></Link>
                    </Thumnail>
                    <Title>{movie.title}</Title>
                </ListItem>
            )
        })}
        </Container>
    );
}

export default MovieBox;