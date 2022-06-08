import React from "react";
import './MovieCards.css'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectNewDisney } from "../features/movie/movieSlice";

function NewDisney(){
    const movies = useSelector(selectNewDisney);
    return(
        <div className="movieCard">
            <h4>New to DisneyClone+</h4>
            <div className="movieCard__content">
                {
                    movies && movies.map((movie, key) => (
                        <div key={key} className="movieCard__contentWrap">
                            {movie.id}
                            <Link to={'/details/' + movie.id}>
                                <img src={movie.cardImg} alt={movie.title}/>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default NewDisney;