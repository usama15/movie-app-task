import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './MoviesViewSection.css'
import Modal from '../Modal/Modal';

const MoviesViewSection = (props: any) => {
  let movieKeyWord = props.movieKeyWord;
  const [movies, setMovies] = useState([]);
  const [open, setOpen] = useState<Boolean>(false);
  const [filmId, setFilmId] = useState<string>('');

  useEffect(() => {
    getMovies();
  }, [movieKeyWord]);

  const getMovies = async () => {
    axios.get(
      `http://www.omdbapi.com/?s=${movieKeyWord}&apikey=fb10cb24`,
    ).then(response => {
      setMovies(response.data.Search);
    });
  }

  const handlerOpen = (e: any) => {
    setOpen(true);
    console.log(e,'film')
    setFilmId(e.imdbID);
  }

  return (
    <>
    <div>
      {movies ? movies.map((movie: any) => (
        <div onClick={() => handlerOpen(movie)} className="container">
          <span className='main'>
            <img className='poster' alt='poster' src={movie.Poster} />
            <span className='title'>{movie.Title}</span>
          </span>
        </div>
      )) : 'No movies found'}
      <Modal filmdata={filmId} show={open} close={() => setOpen(false)}/>
    </div>
    </>
  )
}

export default MoviesViewSection