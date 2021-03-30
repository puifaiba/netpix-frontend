import React from "react"
import Card from "./Card";
import "../../node_modules/video-react/dist/video-react.css"; // import css
import { Player } from 'video-react';


const CardDetails = ({ movie: { title, overview, runtime, release_date, src, image_src } }) => {

    // const playMovie = () => {
    //     return (


    //     )
    // }

    return (
        <div className="cardDetails">
            {/* <Player
                playsInline
                poster={image_src}
                src="https://www.youtube.com/watch?v=vM-Bja2Gy04"
            /> */}
            <Player>
                <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
            </Player>
            {/* <img
                alt={`cover image of ${title}`}
                src={image_src}
                className="background-image"
            /> */}
            <div className="contents">
                <h2>{title}</h2>
                <p>
                    {overview}
                </p>
                <strong>
                    {runtime}
                </strong>
                <br />
                <button
                    className="ui button fluid"
                    onClick={() =>
                        (console.log("I was called"))
                    }
                >
                    Go Back
                </button>
                <button
                    className="ui button fluid"
                    onClick={() =>
                        (console.log("play, niveiehr"))
                    }
                >
                    Play movie
                </button>
            </div>
        </div>
    );
};

export default CardDetails