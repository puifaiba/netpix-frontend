import React, { Component, useState } from "react"
import Card from "../components/Card"
// import "../components/card.scss"
import ItemsCarousel from "react-items-carousel"
import CardDetails from "../components/CardDetails"

const BASE_URL = "http://localhost:3000/"
const GET_MOVIES = `${BASE_URL}movies/`

export default function Home() {

  const [movies, setMovies] = useState([])
  const [cardDetails, setCardDetails] = useState(false)

  const fetchData = async () => {
    const res = await fetch(GET_MOVIES)
    const movies = await res.json()
    setMovies(movies)
  }

  //called by Card when on a click event
  const setMovie = (id) => setCardDetails(id)

  const getMovie = () => movies.find(movie => movie.id == cardDetails)


  fetchData()
  const [activeItemIndex, setActiveItemIndex] = useState(0)
  const chevronWidth = 40
  return (
    <div>
      {cardDetails === false ?
        <div style={{ padding: 0, maxWidth: "100%", margin: "0" }}>
          <ItemsCarousel
            infiniteLoop={false}
            gutter={12}
            activePosition={"center"}
            chevronWidth={60}
            disableSwipe={false}
            alwaysShowChevrons={false}
            numberOfCards={5}
            slidesToScroll={4}
            outsideChevron={false}
            showSlither={false}
            firstAndLastGutter={true}
            activeItemIndex={activeItemIndex}
            requestToChangeActive={(value) => setActiveItemIndex(value)}
            rightChevron={">"}
            leftChevron={"<"}
          >
            {movies.map((movie) => (
              <Card movie={movie} setMovie={setMovie} />
            ))}
          </ItemsCarousel>
        </div>
        :
        <CardDetails movie={getMovie()} setCardDetails={setCardDetails} />
      }
    </div>



    // <div>
    //   {/* Highlight */}
    //   {/* <div className="flix-container"> */}
    //   <div className="carousel">

    //   </div>
    //   {/* </div> */}
    // </div>
  )
}
