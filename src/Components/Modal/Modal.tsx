import React, { useState, useEffect } from 'react';
import './Modal.css';
import axios from 'axios';


const Modal = (props: any) => {
    const filmdata = props.filmdata;
    const [movies, setMovies] = useState<any>({});

    useEffect(() => {
        getMovies();
    }, [filmdata]);

    const getMovies = async () => {
        axios.get(
            `http://www.omdbapi.com/?i=${filmdata}&apikey=fb10cb24`,
        ).then(response => {
            setMovies(response.data);
        });
    }

    console.log(movies);
    return (
        <div>
            <div className="modal-wrapper"
                style={{
                    transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                <div className="modal-header">
                    <h2>{movies.Type === 'movie' ? "Movie Details" : "Series Details"}</h2>
                    <span className="close-modal-btn" onClick={props.close}>×</span>
                </div>
                <div className="modal-body">
                    <div className="container-body">
                        <div>
                            <img src={movies?.Poster} className='modal-poster' alt="poster" />
                        </div>
                        <div className="modal-body-main">
                            <div className='model-text'>Name: {movies?.Title}</div>
                            <div className='model-text'>Released: {movies?.Released}</div>
                            <div className='model-text'>Rated: {movies?.Rated}</div>
                            <div className='model-text'>Time: {movies?.Runtime}</div>
                            <div className='model-text'>Type: {movies?.Type}</div>
                            <div className='model-text'>Plot: {movies?.Plot}</div>
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                </div>
            </div>
        </div>
    )
}

export default Modal;