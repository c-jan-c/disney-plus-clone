import React from "react";
import './MovieCards.css'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectTrending } from "../features/movie/movieSlice";

function Trending(){
    const movies = useSelector(selectTrending)
    return(
        <div className="movieCard">
            <h4>Trending</h4>
            <div className="movieCard__content">
                {
                    movies && movies.map((movie, key) => (
                        <div key={key} className="movieCard__contentWrap">
                            {movie.id}
                            <Link to={'/details/' + movie.id}>
                                <img src={movie.cardImg} alt={movie.title} />
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Trending;