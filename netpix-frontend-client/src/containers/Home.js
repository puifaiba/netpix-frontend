import React, { Component } from 'react'
import Card from "../components/Card";
import "../components/card.scss";

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

    componentDidMount() {
        fetch(GET_MOVIES).then(res => res.json()).then(movies => this.setState({ movies }))
    }

    render() {
        return (
            <div>
                {/* Highlight */}
                <div className="flix-container">
                    <ul className="flix-items">
                        {this.state.movies.map(movie => <Card movie={movie} />)}
                    </ul>
                </div>

            </div>
        )
    }
}
