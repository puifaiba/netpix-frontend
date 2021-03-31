import React, { useState, useEffect } from "react"
// import Card from "../components/Card"
// import ItemsCarousel from "react-items-carousel"
import CardDetails from "../components/CardDetails"
import Hilight from "../components/Hilight"
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

  //gets random number between 0 and the length of the movies array
  const getRandom = () => Math.floor(Math.random() * movies.length)
  // console.log(getRandom());

  return (
    <div className="homepage">
      {cardDetails === false ?
        <div>
          <h3 className="row-text">My list</h3>
          <CallItemsCarousel movies={findMyMovies()} setMovie={setMovie} />
          <h3 className="row-text">Now Playing</h3>
          <CallItemsCarousel movies={movies} setMovie={setMovie} />
        </div>
        :
        <CardDetails movie={getMovie()} setCardDetails={setCardDetails} setMyMovies={setMyMovies} myMovies={myMovies} />
      }
    </div>
  )
}
