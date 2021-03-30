import React, { Component } from 'react'
import "./card.scss";

export default class Card extends Component {
    render() {
        console.log("I got called");
        const { title, overview, runtime, release_date, src, image_src } = this.props.movie
        return (
            <a className="carousel-item"><img src={image_src} weight="200" height="120" /></a>
            // <div className="item">
            //     <img src={image_src} alt={`Image of ${title}`} />
            //     <h2>{title}</h2>
            // </div>
            // <div >
            //     <div className="bg-img">
            //     </div>
            //     <a href="#">
            //         <div className="content">
            //             <h2>{title}</h2>
            //         </div>
            //     </a>
            // </div>
        )
    }
}
