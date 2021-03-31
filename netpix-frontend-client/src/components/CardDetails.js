import React from "react"
import Card from "./Card"
import "../../node_modules/video-react/dist/video-react.css" // import css
import YoutubeEmbed from "./YouTubeEmbed"

const CardDetails = ({ movie: { id, title, overview, runtime, release_date, src }, setCardDetails, setMyMovies, myMovies }) => {
    const ADD_MOVIE = "http://localhost:3000/addMovie"
    const REMOVE_MOVIE = "http://localhost:3000/removeMovie"

    //adds a movie to the user's list
    const addToMyList = movie_id => {
        setMyMovies([...myMovies, movie_id])
    }

    const removeMyMovies = movie_id => setMyMovies(myMovies.filter(id => id !== movie_id))


    //adds the movie in the backend and calls addToMyList for the frontend
    const addMovieToList = id => {
        const item = {
            movie_id: id,
            user_id: localStorage.getItem("user_id")
        }

        const request = {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({ user: item }),
            method: "POST"
        }

        fetch(ADD_MOVIE, request).then(res => res.json())
            .then(res => addToMyList(res.list.movie_id))
            .catch(error => console.log(error.message))
    }

    //removes the movie fron the list in the backend and calls ... for the frontend
    const removeMovieFromList = id => {
        const item = {
            movie_id: id,
            user_id: localStorage.getItem("user_id")
        }

        const request = {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({ user: item }),
            method: "POST"
        }
        //make a fetch to REMOVE_MOVIE and update the frontend
        fetch(REMOVE_MOVIE, request).then(res => res.json())
            .then(res => removeMyMovies(res.movie_id))
            .catch(error => console.log(error.message))
    }

    return (
        <div className="cardDetails">
            <YoutubeEmbed embedId={src} />
            <div className="contents">
                <h2>{title}</h2>
                <p>
                    {overview}
                    <br />
                    Released on: {release_date}
                </p>
                <strong>
                    {runtime}
                </strong>
                <br />
                <button
                    className="cardDetail-button"
                    onClick={() =>
                        (setCardDetails(false))
                    }
                >
                    Go Back
                </button>
                {myMovies.includes(id) ?
                    <button className="cardDetail-button" onClick={() => removeMovieFromList(id)}> Remove from list</button>
                    :
                    <button className="cardDetail-button" onClick={() => (addMovieToList(id))}>
                        Add to my list
                </button>
                }

            </div>
        </div>
    );
};

export default CardDetails
