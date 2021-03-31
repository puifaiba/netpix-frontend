
import React, {Component, useState} from "react"

function Card({
  movie: {id, title, image_src, overview, runtime, release_date},
  setMovie,
}) {
  const [details, setDetails] = useState(false)
  const [isShown, setIsShown] = useState(false)

  return (
    <div
      className="card"
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
      onClick={(_) => setMovie(id)}
      style={{
        backgroundImage: `url(${image_src})`,
      }}
    >
      <div className="title" id="hover">
        {title}
      </div>
      {isShown && (
        <div className="card-details">
          <p>{overview}</p>
          <p>
            {release_date.split("-")[0]} &nbsp;&nbsp;<em>{runtime}</em>
          </p>
        </div>
      )}
    </div>
  )
}

export default Card
