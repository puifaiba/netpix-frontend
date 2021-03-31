import React from "react"
import Card from "./Card";
import "../../node_modules/video-react/dist/video-react.css"; // import css
// import { Player } from 'video-react';
import YoutubeEmbed, { } from "./YouTubeEmbed";



const CardDetails = ({ movie: { title, overview, runtime, release_date, src }, setCardDetails }) => {

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
                <button
                    className="cardDetail-button"
                    onClick={() =>
                        (console.log("add to my list"))
                    }
                >
                    Add to my list
                </button>
            </div>
        </div>
    );
};

export default CardDetails