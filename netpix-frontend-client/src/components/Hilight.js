import React, { } from "react"
import YoutubeEmbed from "./YouTubeEmbed"

const Hilight = ({ movie }) => {
  let src = "https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
  let title = "A Movie"
  let overview = "Movie Summary"
  if (movie) {
    src = movie.src
    title = movie.title
    overview = movie.overview
  }

  return <div className="hilight">
    <p>{title}</p>
    <YoutubeEmbed embedId={src} />
    <p>{overview}</p>
  </div>
}

export default Hilight
