import React, { Component } from 'react'
import "./card.scss";

export default class Card extends Component {
    render() {
        console.log("I got called");
        const { title, overview, runtime, release_date, src, image_src } = this.props.movie
        return (
            // <div className="title-card">
            //     <h2>{title}</h2>
            <li>
                <div className="bg-img">
                    <img className="background-image" src={image_src} />
                </div>
                <a href="#">
                    <div className="content">
                        <h2>{title}</h2>
                    </div>
                </a>
            </li>
        )
    }
}
