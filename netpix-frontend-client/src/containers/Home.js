import React, { Component, useState, useEffect } from "react"
// import Card from "../components/Card"
// import "../components/card.scss"
import CardDetails from "../components/CardDetails"
import CallItemsCarousel, { } from "./CallItemsCarousel";

const BASE_URL = "http://localhost:3000/"
const GET_MOVIES = `${BASE_URL}movies/`
const USER_MOVIES = `${BASE_URL}userMovies/`


export default function Home() {

  const [movies, setMovies] = useState([])
  const [cardDetails, setCardDetails] = useState(false)
  const [myMovies, setMyMovies] = useState([])

  //gets all movies
  const fetchData = async () => {
    const res = await fetch(GET_MOVIES)
    const movies = await res.json()
    setMovies(movies)
  }

  //gets the movies anytime anything changes
  useEffect(() => fetchData(), [])

  //gets movies in the user's list
  const getMyMovies = async () => {
    try {
      const res = await fetch(USER_MOVIES + (+localStorage.getItem("user_id")))
      const movies_id = await res.json()
      setMyMovies(movies_id)
    } catch (error) {
      console.log(error.message)
    }
  }
  //gets the user's list anytime anything changes
  useEffect(() => getMyMovies(), [])


  //returns an array of the user's movies from the current list
  const findMyMovies = () => movies.filter(movie => myMovies.includes(movie.id))
  // console.log(findMyMovies())


  //called by Card on a click event
  const setMovie = (id) => setCardDetails(id)

  //gets the movie to be rendered
  const getMovie = () => movies.find(movie => movie.id == cardDetails)



  return (
    <div>
      {cardDetails === false ?
        <div>
          <h3>My list</h3>
          <CallItemsCarousel movies={findMyMovies()} setMovie={setMovie} />
          <h3>All Movies</h3>
          <CallItemsCarousel movies={movies} setMovie={setMovie} />
        </div>
        :
        <CardDetails movie={getMovie()} setCardDetails={setCardDetails} setMyMovies={setMyMovies} myMovies={myMovies} />
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
