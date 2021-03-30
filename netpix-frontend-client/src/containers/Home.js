import React, { Component } from 'react'
import Card from "../components/Card";
import "../components/card.scss";
import M from "materialize-css";

const BASE_URL = "http://localhost:3000/"
const GET_MOVIES = `${BASE_URL}movies/`


export default class Home extends Component {
    state = {
        movies: []
    }

    // fetchData = async () => {
    //     const res = await fetch(GET_MOVIES)
    //     const movies = await res.json()
    //     return movies
    // }

    componentDidMount = () => {
        fetch(GET_MOVIES).then(res => res.json()).then(movies => this.setState({ movies }))
        let elems = document.querySelectorAll('.carousel');
        M.Carousel.init(elems, { duration: 200 });
    }

    render = () => {
        return (
            <div>
                {/* Highlight */}
                {/* <div className="flix-container"> */}
                <div className="carousel">
                    {this.state.movies.map(movie => <Card movie={movie} />)}
                </div>
                {/* </div> */}

            </div>
        )
    }
}
